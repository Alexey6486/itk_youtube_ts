import {authApi} from "../api/api";
import {AppRootState} from "./redux-store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

export type AuthUserData = {
    id: number | null
    email: string | null
    login: string | null
}
export type AuthState = {
    payload: AuthUserData
    isAuth: boolean
}
type SetUserDataACType = {
    type: typeof SET_USER_AUTH_DATA
    payload: AuthUserData
    isAuth: boolean
}

const setAuthUserData = (payload: AuthUserData, isAuth: boolean): SetUserDataACType => {
  return {
      type: SET_USER_AUTH_DATA,
      payload,
      isAuth,
  }
};

type StopSubmitACType = {
    form: string
    errObj: {
        _error: string
    }
};

type ActionType = SetUserDataACType;
export type DispatchTypeAuthReducer = (action: ActionType ) => void



const initState: AuthState = {
    payload: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
};

export const authReducer = (state: AuthState = initState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, payload: action.payload, isAuth: action.isAuth};
        default:
            return state;
    }
};

export const authThunkCreator = () => (dispatch: DispatchTypeAuthReducer) => {
    authApi.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data, true));
            }
        });
};

type ThunkType = ThunkAction<void, AppRootState, {}, ActionType>;
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean):ThunkType => (dispatch: ThunkDispatch<AppRootState, {}, ActionType>) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if(res.resultCode === 0) {
                dispatch(authThunkCreator())
            } else {
                if (res.messages.length > 0) {
                    let action: any = stopSubmit('LoginForm', {_error: res.messages[0]});
                    dispatch(action);
                }
            }
        })
}

export const logoutThunkCreator = ():ThunkType => (dispatch: ThunkDispatch<AppRootState, {}, ActionType>) => {
    authApi.logout()
        .then(res => {
            if(res.resultCode === 0) {
                dispatch(setAuthUserData({id: null, email: null, login: null}, false));
            }
        })
}