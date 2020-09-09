import {authApi, securityApi} from "../../api/api";
import {AppRootState} from "../../redux/redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';
const GET_CAPTCHA = 'GET_CAPTCHA';

type SetUserDataACType = {
    type: typeof SET_USER_AUTH_DATA
    payload: AuthUserData
    isAuth: boolean
};
type GetCaptchaACType = {
    type: typeof GET_CAPTCHA
    captchaUrl: string | null
};

const setAuthUserData = (payload: AuthUserData, isAuth: boolean): SetUserDataACType => {
    return {
        type: SET_USER_AUTH_DATA,
        payload,
        isAuth,
    }
};
const getCaptchaAC = (captchaUrl: string | null): GetCaptchaACType => {
    return {
        type: GET_CAPTCHA,
        captchaUrl,
    }
};

type StopSubmitACType = {
    form: string
    errObj: {
        _error: string
    }
};

type ActionType = SetUserDataACType | GetCaptchaACType;
export type DispatchTypeAuthReducer = (action: ActionType) => void;
type ThunkType = ThunkAction<void, AppRootState, {}, ActionType>;

export type AuthUserData = {
    id: number | null
    email: string | null
    login: string | null
};
export type AuthState = {
    payload: AuthUserData
    isAuth: boolean
    captchaUrl: string | null
};
const initState: AuthState = {
    payload: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state: AuthState = initState, action: ActionType) => {
    switch (action.type) {
        case GET_CAPTCHA:
            return {...state, captchaUrl: action.captchaUrl};
        case SET_USER_AUTH_DATA:
            return {...state, payload: action.payload, isAuth: action.isAuth};
        default:
            return state;
    }
};

export const authThunkCreator = () => async (dispatch: DispatchTypeAuthReducer) => {
    const res = await authApi.authMe();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data, true));
    }
};
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkType => async (dispatch: ThunkDispatch<AppRootState, {}, ActionType>) => {
    const res = await authApi.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
        dispatch(authThunkCreator())
        dispatch(getCaptchaAC(null))
    } else if (res.resultCode === 10) {
        dispatch(getCaptchaThunkCreator());
    } else {
        if (res.messages.length > 0) {
            let action: any = stopSubmit('LoginForm', {_error: res.messages[0]});
            dispatch(action);
        }
    }
};
export const getCaptchaThunkCreator = (): ThunkType => async (dispatch: ThunkDispatch<AppRootState, {}, ActionType>) => {
    const res = await securityApi.getCaptcha();
    const captchaUrl = res.url;
    dispatch(getCaptchaAC(captchaUrl));
};
export const logoutThunkCreator = (): ThunkType => async (dispatch: ThunkDispatch<AppRootState, {}, ActionType>) => {
    const res = await authApi.logout();
    if (res.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null}, false));
    }
};