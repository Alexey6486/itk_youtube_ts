import {StateType} from "../../../../redux/store";
import {
    newTextPostActionCreator,
    addPostActionCreator,
    DispatchTypeProfileReducer
} from '../../../../redux/profile-reducer';
import AddPost from "./AddPost";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        textareaInput: state.profilePage.textareaInput
    }
};
const mapDispatchToProps = (dispatch: DispatchTypeProfileReducer) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        changeText: (text: string) => {dispatch(newTextPostActionCreator(text))}
    }
};
const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;