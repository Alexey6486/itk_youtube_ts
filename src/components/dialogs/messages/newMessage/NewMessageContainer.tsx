import {StateType, DispatchType} from "../../../../redux/store";
import { newTextMsgActionCreator, addMsgActionCreator } from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import { connect } from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        textareaInput: state.messagesPage.textareaInput
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: () => {dispatch(addMsgActionCreator())},
        changeText: (text: string) => {dispatch(newTextMsgActionCreator(text))}
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;