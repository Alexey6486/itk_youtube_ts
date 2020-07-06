import {UserProfileType} from "./store";

const SET_USER_PROFILE_DATA = 'SET-USER-DATA';

type SetUserDataACType = {
    type: typeof SET_USER_PROFILE_DATA
    userProfile: UserProfileType
}

export const setUserProfileData = (userProfile: UserProfileType): SetUserDataACType  => {
    return {
        type: SET_USER_PROFILE_DATA,
        userProfile: userProfile,
    }
};

type ActionsType = SetUserDataACType;

export type DispatchTypeUsersReducer = (action: ActionsType) => void

const initState = {
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
};

const userProfile = (state: UserProfileType = initState, action: ActionsType) => {

    switch(action.type) {
        case SET_USER_PROFILE_DATA:
            return {...action.userProfile};
        default:
            return state;
    }
};

export default userProfile;