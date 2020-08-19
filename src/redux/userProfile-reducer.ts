import {UserProfileType} from "./store";
import {profileApi} from "../api/api";

type UserStatusType = {
    status: string | null
}
export type UserProfileStateType = {
    userData: UserProfileType
    userStatus: UserStatusType
}

const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA';
const SET_USER_STATUS = 'SET-USER-STATUS';

type SetUserDataACType = {
    type: typeof SET_USER_PROFILE_DATA
    userProfile: UserProfileType
}
type SetUserStatusACType = {
    type: typeof SET_USER_STATUS
    status: string
}

export const setUserProfileData = (userProfile: UserProfileType): SetUserDataACType => {
    return {
        type: SET_USER_PROFILE_DATA,
        userProfile: userProfile,
    }
};
export const setUserStatus = (status: string): SetUserStatusACType => {
    return {
        type: SET_USER_STATUS,
        status
    }
};

type ActionsType = SetUserDataACType | SetUserStatusACType;

export type DispatchTypeUsersReducer = (action: ActionsType) => void

const initState: UserProfileStateType = {
    userData: {
        aboutMe: 'test',
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: 'test',
        fullName: 'test',
        contacts: {
            github: 'github',
            vk: 'vk',
            facebook: 'facebook',
            instagram: 'instagram',
            twitter: 'twitter',
            website: 'website',
            youtube: 'youtube',
            mainLink: 'mainLink',
        },
        photos: {
            small: 'small',
            large: 'large',
        },
    },
    userStatus: {
        status: "",
    }
};

const userProfile = (state: UserProfileStateType = initState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {...state, userData: action.userProfile};
        case SET_USER_STATUS:
            const stateCopy = {...state}
            stateCopy.userStatus.status = action.status;
            return stateCopy;
        default:
            return state;
    }
};

export const getProfileThunkCreator = (userId: string) => async (dispatch: DispatchTypeUsersReducer) => {
    const res = await profileApi.getProfile(userId);
    dispatch(setUserProfileData(res.data));
};
export const getStatusThunkCreator = (userId: string) => async (dispatch: DispatchTypeUsersReducer) => {
    const res = await profileApi.getStatus(userId);
    dispatch(setUserStatus(res.data));
};

export default userProfile;