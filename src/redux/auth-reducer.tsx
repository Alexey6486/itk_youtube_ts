
const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

export type AuthUserData = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetUserDataACType = {
    type: typeof SET_USER_AUTH_DATA
    userData: AuthUserData
}

export const setAuthUserData = (userData: AuthUserData): SetUserDataACType => {
  return {
      type: SET_USER_AUTH_DATA,
      userData
  }
};

type ActionType = SetUserDataACType;

const initState: AuthUserData = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: AuthUserData = initState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            debugger
            return {...state, ...action.userData, isAuth: true};
        default:
            return state;
    }
};