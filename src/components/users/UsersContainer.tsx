import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {followUserActionCreator, unfollowUserActionCreator, DispatchTypeUsersReducer} from "../../redux/users-reducer";

const mapToStateProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch: DispatchTypeUsersReducer) => {
    return {
        followUser: (id: number) => {dispatch(followUserActionCreator(id))},
        unfollowUser: (id: number) => {dispatch(unfollowUserActionCreator(id))}
    }
};
const UsersContainer = connect(mapToStateProps, mapDispatchToProps)(Users);

export default UsersContainer;
