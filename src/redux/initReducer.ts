import {authThunkCreator} from "./auth-reducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {AppRootState} from "./redux-store";

const INIT_APP = 'INIT_APP';

type InitAppACType = {
    type: typeof INIT_APP;
}

const initApp = (): InitAppACType => {
    return {
        type: INIT_APP,
    }
}

type ActionTypes = InitAppACType;
type DispatchType = (action: ActionTypes) => void;

export type InitStateType = {
    init: boolean
}
const initState = {
    init: false,
}
export const initReducer = (state: InitStateType = initState, action: ActionTypes) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, init: true};
        default:
            return state;
    }
}
type ThunkType = ThunkAction<void, AppRootState, {}, ActionTypes>
export const initAppTC = (): ThunkType => (dispatch: ThunkDispatch<AppRootState, {}, ActionTypes>) => {
    let promise = dispatch(authThunkCreator());
    Promise.all([promise]).then(() => {
        dispatch(initApp());
    });
};