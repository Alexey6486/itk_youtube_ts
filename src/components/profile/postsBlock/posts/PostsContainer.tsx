import {StateType} from '../../../../redux/store';
import Posts from "./Posts";
import { connect } from 'react-redux';
//import {AuthRedirectComponent} from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts
    }
};

//const AuthProfilePostsComponent = AuthRedirectComponent(Posts);
// const PostsContainer = AuthRedirectComponent(connect(mapStateToProps)(Posts));

//export let Test = compose(connect(mapStateToProps), AuthRedirectComponent)(Posts);
// const PostsContainer = AuthRedirectComponent(connect(mapStateToProps)(Posts));

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;