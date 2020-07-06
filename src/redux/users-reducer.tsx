import {UsersPageType, ApiUsersType} from "./store";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const LOADING = "LOADING";

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
type SetLoadingACType = {
    type: typeof LOADING
    isFetching: boolean
}

type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageACType | SetTotalUserCountACType | SetLoadingACType;

export type DispatchTypeUsersReducer = (action: ActionsType) => void

export const followUser = (id: number):FollowUserACType => {
    return {
        type: FOLLOW_USER,
        id: id
    };
};
export const unfollowUser = (id: number):UnfollowUserACType => {
    return {
        type: UNFOLLOW_USER,
        id: id
    };
};
export const setUsers = (users: Array<ApiUsersType>):SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    };
};
export const setCurrentPage = (currentPage: number):SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
export const setTotalUsersCount = (totalUsersCount: number):SetTotalUserCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    };
};
export const setLoading = (isFetching: boolean):SetLoadingACType => {
    return {
        type: LOADING,
        isFetching: isFetching
    };
};

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state: UsersPageType = initState, action: ActionsType) => {

    switch(action.type) {

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case LOADING:
            return {...state, isFetching: action.isFetching};

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