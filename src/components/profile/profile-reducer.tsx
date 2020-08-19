import {PostsType, ProfilePageType} from "../../redux/store";
import { v1 } from "uuid";

const ADD_POSTS = "ADD-POST";
const REMOVE_POST = 'REMOVE_POST';

/* These action types we use in the dispatch action type (ActionsType) in store.tsx */
export type AddPostsACType = {
    type: typeof ADD_POSTS
    post: string
}
export type RemovePostACType = {
    type: typeof REMOVE_POST
    postId: string
}

type ActionsType = AddPostsACType | RemovePostACType;

export type DispatchTypeProfileReducer = (action: ActionsType) => void

/* Action creators are callbacks we use as a dispatch param on target page (AddPost.tsx) */
export const addPostsAC = (post: string):AddPostsACType => {
    return {
        type: ADD_POSTS,
        post
    };
};
export const removePostAC = (postId: string):RemovePostACType => {
    return {
        type: REMOVE_POST,
        postId
    };
};

const initState = {
    posts: [
        {message: 'Greetings!', likes: '8', postId: '1'},
        {message: 'See you later!', likes: '17', postId: '2'},
    ],
    status: 'test',
};

/* This function is called in dispatch in store.tsx and returns the state, whether changed or not */
export const profileReducer = (state: ProfilePageType = initState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POSTS:
            let postId = v1();
            let newEntry: PostsType = {message: action.post, likes: "2", postId: postId};
            let newArray = [...state.posts, newEntry];
            return {...state, posts: newArray};
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.postId !== action.postId)};
        default:
            return state;
    }
};

export const addPostTC = (post: string) => (dispatch: DispatchTypeProfileReducer) => {
    dispatch(addPostsAC(post));
}
export const removePostTC = (postId: string) => (dispatch: DispatchTypeProfileReducer) => {
    dispatch(removePostAC(postId));
}