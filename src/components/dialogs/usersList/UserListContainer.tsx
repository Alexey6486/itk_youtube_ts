import {StateType} from "../../../redux/store";
import UsersList from "./UsersList";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        usersInChatRoom: state.messagesPage.usersInChatRoom
    }
};

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer;