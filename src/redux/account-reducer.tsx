import {accountApi, profileApi} from "../api/api";
import {DispatchTypeUsersReducer, setUserStatus} from "./userProfile-reducer";

export type AccountStateType = {
    myStatus: {
        status: string
    }
}

const UPDATE_STATUS = 'UPDATE_STATUS';
const GET_MY_STATUS = 'GET-MY-STATUS';

type UpdateStatusACType = {
    type: typeof UPDATE_STATUS
    status: string
}
type GetMyStatusACType = {
    type: typeof GET_MY_STATUS
    status: string
}

const updateStatus = (status: string): UpdateStatusACType => {
    return {
        type: UPDATE_STATUS,
        status
    }
}
export const getMyStatus = (status: string): GetMyStatusACType => {
    return {
        type: GET_MY_STATUS,
        status
    }
};

type ActionCreatorType = UpdateStatusACType | GetMyStatusACType;
type DispatchType = (action: ActionCreatorType) => void;

const initState: AccountStateType = {
    myStatus: {
        status: ""
    },
}

export const accountReducer = (state: AccountStateType = initState, action: ActionCreatorType) => {
    switch (action.type) {
        case UPDATE_STATUS:
            const stateUpdateStatusCopy = {...state};
            stateUpdateStatusCopy.myStatus.status = action.status;
            return stateUpdateStatusCopy;
        case GET_MY_STATUS:
            debugger
            const stateGetStatusCopy = {...state}
            stateGetStatusCopy.myStatus.status = action.status;
            
            return {...stateGetStatusCopy};
        default:
            return state;
    }
}

export const updateStatusThunkCreator = (status: string) => (dispatch: DispatchType) => {
    accountApi.updateStatus(status)
        .then(res => {
            return dispatch(updateStatus(status));
        })
}
export const getMyStatusThunkCreator = (userId: string) => (dispatch: DispatchType) => {
    profileApi.getStatus(userId)
        .then(res => {
            debugger
            dispatch(getMyStatus(res.data));
        })
};