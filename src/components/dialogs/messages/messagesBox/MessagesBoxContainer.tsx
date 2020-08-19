import {StateType} from "../../../../redux/store";
import {MessagesBox} from "./MessagesBox";
import { connect } from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        messages: state.messagesPage.messagesInChatRoom
    }
};

const MessagesBoxContainer = connect(mapStateToProps)(MessagesBox);

export default MessagesBoxContainer;