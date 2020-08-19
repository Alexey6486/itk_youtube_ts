import {ApiUsersOnChangeType, ApiUsersType, UsersPageType} from "../../redux/store";
import {usersApi} from "../../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const LOADING = "LOADING";
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

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
type FollowingInProgressACType = {
    type: typeof FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

type ActionsType = FollowUserACType
    | UnfollowUserACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUserCountACType
    | SetLoadingACType
    | FollowingInProgressACType;

export type DispatchTypeUsersReducer = (action: ActionsType) => void

export const followUser = (id: number): FollowUserACType => {
    return {
        type: FOLLOW_USER,
        id: id
    };
};
export const unfollowUser = (id: number): UnfollowUserACType => {
    return {
        type: UNFOLLOW_USER,
        id: id
    };
};
export const setUsers = (users: Array<ApiUsersType>): SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    };
};
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUserCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    };
};
export const setLoading = (isFetching: boolean): SetLoadingACType => {
    return {
        type: LOADING,
        isFetching: isFetching
    };
};
export const followingInProgress = (isFetching: boolean, userId: number): FollowingInProgressACType => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching,
        userId,
    };
};

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledIdArr: [],
};

const userDataChanger = (usersArray: Array<ApiUsersOnChangeType>, objPropName: string, id: number, changedObj: ApiUsersOnChangeType) => {
    return usersArray.map(user => user[objPropName as keyof typeof user] === id ? {...user, ...changedObj} : user);
}
export const usersReducer = (state: UsersPageType = initState, action: ActionsType) => {

    switch (action.type) {

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case LOADING:
            return {...state, isFetching: action.isFetching};

        case FOLLOW_USER:
            let followArr = [...state.users];
            //followArr = followArr.map(user => user.id === action.id ? {...user, followed: true} : user);
            const newFollowArr = userDataChanger(followArr, 'id', action.id, {followed: true});
            return {...state, users: newFollowArr};

        case UNFOLLOW_USER:
            let unfollowArr = [...state.users];
            //unfollowArr = unfollowArr.map(user => user.id === action.id ? {...user, followed: false} : user);
            const newUnfollowArr = userDataChanger(unfollowArr, 'id', action.id, {followed: false});
            return {...state, users: newUnfollowArr};

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                disabledIdArr: action.isFetching
                    ? [...state.disabledIdArr, action.userId]
                    : state.disabledIdArr.filter(userId => userId !== action.userId)
            };

        default:
            return state;
        //throw new Error('Undefined action type in usersReducer.');
    }
};

// short form:
//
//const getUsersThunkCreator = () => (dispatch: DispatchTypeUsersReducer) => {...}
//
// of:
//
// const getUsersThunkCreator = () => {
//     return (dispatch: DispatchTypeUsersReducer) => {
//         ...
//     }
// };

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: DispatchTypeUsersReducer) => {
    dispatch(setLoading(true));
    const res = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setLoading(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalUsersCount(res.totalCount));
};

export const getUsersOnPageChangeThunkCreator = (page: number, pageSize: number) => async (dispatch: DispatchTypeUsersReducer) => {
    dispatch(setLoading(true));
    dispatch(setCurrentPage(page));
    const res = await usersApi.getUsers(page, pageSize);
    dispatch(setLoading(false));
    dispatch(setUsers(res.items));
};

const followUnfollowFlow = async (dispatch: DispatchTypeUsersReducer, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsType) => {
    dispatch(followingInProgress(true, userId));
    const res = await apiMethod(userId);
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(followingInProgress(false, userId));
}
export const followUserThunkCreator = (userId: number) => async (dispatch: DispatchTypeUsersReducer) => {
    const apiMethod = usersApi.followUserAxios.bind(usersApi);
    followUnfollowFlow(dispatch, userId, apiMethod, followUser);
};
export const unfollowUserThunkCreator = (userId: number) => async (dispatch: DispatchTypeUsersReducer) => {
    const apiMethod = usersApi.unfollowUserAxios.bind(usersApi);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowUser);
};

// case UNFOLLOW_USER:
//     const unfollowArr = [...state.users];
// unfollowArr.find(user => {
//     if (user.id === action.id) {
//         user.followed = false;
//     }
// });
// return {...state, users: unfollowArr};