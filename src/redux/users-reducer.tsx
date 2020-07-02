import {UsersPageType, ApiUsersType} from "./store";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

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
    users: Array<ApiUsersType>
}
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUserCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageACType | SetTotalUserCountACType;

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
export const setUserActionCreator = (users: Array<ApiUsersType>):SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    };
};
export const setCurrentPageActionCreator = (currentPage: number):SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
export const setTotalUserCountActionCreator = (totalUsersCount: number):SetTotalUserCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    };
};

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state: UsersPageType = initState, action: ActionsType) => {

    switch(action.type) {

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

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

        default:
            return state;
            //throw new Error('Undefined action type in usersReducer.');
    }
};

export default usersReducer;