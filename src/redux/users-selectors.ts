import {StateType} from "./store";
import {createSelector} from 'reselect';

export const getUsers = (state: StateType) => {
    return state.usersPage.users;
};

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching;
};

export const getDisabledIdArr = (state: StateType) => {
    return state.usersPage.disabledIdArr;
};

export const getIsAuth = (state: StateType) => {
    return state.auth.isAuth;
};

export const getUsersSuperSelector = createSelector([getUsers], (users) => {
    return users.filter(u => true);
});