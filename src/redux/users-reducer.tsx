import {UsersPageType} from "./store";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

type FollowUserACType = {
    type: typeof FOLLOW_USER
    id: number
}
type UnfollowUserACType = {
    type: typeof UNFOLLOW_USER
    id: number
}
type SetUsersACType = {
    type: typeof SET_USERS
}

type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType;

export type DispatchTypeUsersReducer = (action: ActionsType) => void

export const followUserActionCreator = (id: number):FollowUserACType => {
    return {
        type: FOLLOW_USER,
        id: id
    };
};
export const unfollowUserActionCreator = (id: number):UnfollowUserACType => {
    return {
        type: UNFOLLOW_USER,
        id: id
    };
};
export const setUserActionCreator = ():SetUsersACType => {
    return {
        type: SET_USERS,
    };
};

const initState = {
    users: [
        {id: 15, followed: false, name: 'David', location: {country: 'Russia', city: 'Moscow'}, status: 'Daily commute'},
        {id: 16, followed: true, name: 'Marry', location: {country: 'Russia', city: 'Vladimir'}, status: 'At work'},
    ],
};

const usersReducer = (state: UsersPageType = initState, action: ActionsType) => {
    switch(action.type) {
        case FOLLOW_USER:
            const followArr = [...state.users];
            followArr.find(user => {
                if (user.id === action.id) {
                    user.followed = true;
                }
            });
            return {...state, users: followArr};
        case UNFOLLOW_USER:
            const unfollowArr = [...state.users];
            unfollowArr.find(user => {
                if (user.id === action.id) {
                    user.followed = false;
                }
            });
            return {...state, users: unfollowArr};
        case SET_USERS:
            return state;
        default:
            return state;
            //throw new Error('Undefined action type in usersReducer.');
    }
};

export default usersReducer;