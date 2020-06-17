import {ActionsType, PostsType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-TEXT";

/* These action types we use in the dispatch action type (ActionsType) in store.tsx */
export type AddPostACType = {
    type: typeof ADD_POST
}
export type NewTextPostACType = {
    type: typeof NEW_POST_TEXT,
    text: string
}

/* Action creators are callbacks we use as a dispatch param on target page (AddPost.tsx) */
export const addPostActionCreator = ():AddPostACType => {
    return {
        type: ADD_POST
    };
};
export const newTextPostActionCreator = (text: string):NewTextPostACType => {
    return {
        type: NEW_POST_TEXT,
        text
    };
};

const initState = {
    posts: [
        {message: 'Greetings!', likes: '8'},
        {message: 'See you later!', likes: '17'},
    ],
    textareaInput: "",
};

/* This function is called in dispatch in store.tsx and returns the state, whether changed or not */
const profileReducer = (state: ProfilePageType = initState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newEntry: PostsType = {message: state.textareaInput, likes: "2"};
            let newArray = [...state.posts, newEntry];
            return {...state, posts: newArray, textareaInput: ""};
        case NEW_POST_TEXT:
            return {...state, textareaInput: action.text};
        default:
            return state;
    }
};

export default profileReducer;