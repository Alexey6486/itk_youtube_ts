import {StateType} from "../../../../redux/store";
import {addPostTC} from '../../profile-reducer';
import AddPost from "./AddPost";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {

    }
};
// const mapDispatchToProps = (dispatch: DispatchTypeProfileReducer) => {
//     return {
//         addPost: () => {dispatch(addPostsAC())},
//         changeText: (text: string) => {dispatch(addPostAC(text))}
//     }
// };
const AddPostContainer = connect(mapStateToProps, {addPostTC})(AddPost);

export default AddPostContainer;