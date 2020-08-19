import {StateType} from "../../../../redux/store";
import {addMessageThunkCreator} from "../../../../redux/dialogs-reducer";
import {NewMessage} from "./NewMessage";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        textareaInput: state.messagesPage.textareaInput
    }
};
// const mapDispatchToProps = (dispatch: DispatchTypeDialogsReducer) => {
//     return {
//         addMessage: (message: string) => {dispatch(addMsgActionCreator(message))},
//         changeText: (text: string) => {dispatch(newTextMsgActionCreator(text))}
//     }
// };

const NewMessageContainer = connect(mapStateToProps, {addMessageThunkCreator})(NewMessage);

export default NewMessageContainer;