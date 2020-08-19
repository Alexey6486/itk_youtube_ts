import {StateType} from "../../../redux/store";
import {UsersList} from "./UsersList";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        usersInChatRoom: state.messagesPage.usersInChatRoom
    }
};

export const UsersListContainer = connect(mapStateToProps)(UsersList);

