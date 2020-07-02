import Users from "./Users";
import {connect} from "react-redux";
import {StateType, ApiUsersType} from "../../redux/store";
import {followUserActionCreator, unfollowUserActionCreator, DispatchTypeUsersReducer, setUserActionCreator, setCurrentPageActionCreator, setTotalUserCountActionCreator} from "../../redux/users-reducer";

const mapToStateProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
const mapDispatchToProps = (dispatch: DispatchTypeUsersReducer) => {
    return {
        followUser: (id: number) => {dispatch(followUserActionCreator(id))},
        unfollowUser: (id: number) => {dispatch(unfollowUserActionCreator(id))},
        setUsers: (users: Array<ApiUsersType>) => {dispatch(setUserActionCreator(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageActionCreator(currentPage))},
        setTotalUsersCount: (totalUsersCount: number) => {dispatch(setTotalUserCountActionCreator(totalUsersCount))},
    }
};
const UsersContainer = connect(mapToStateProps, mapDispatchToProps)(Users);

export default UsersContainer;
