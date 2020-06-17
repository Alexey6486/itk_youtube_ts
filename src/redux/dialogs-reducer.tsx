import {ActionsType, MessagesPageType} from "./store";

const ADD_MSG = "ADD-MSG";
const NEW_MSG_TEXT = "NEW-MSG-TEXT";

export type AddMsgACType = {
    type: typeof ADD_MSG
}
export type NewTextMsgACType = {
    type: typeof NEW_MSG_TEXT,
    text: string
}

export const addMsgActionCreator = ():AddMsgACType => {
    return {
        type: ADD_MSG
    };
};
export const newTextMsgActionCreator = (text: string):NewTextMsgACType => {
    return {
        type: NEW_MSG_TEXT,
        text
    };
};

const initState = {
    messagesInChatRoom: [
        {id: 12, author: "Jane", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 22, author: "Martin", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ],
    usersInChatRoom: [
        {id: 1, userName: "John", dialogUrl: "/dialogs/1"},
        {id: 2, userName: "Jane", dialogUrl: "/dialogs/2"},
        {id: 3, userName: "Martin", dialogUrl: "/dialogs/3"},
        {id: 4, userName: "Marry", dialogUrl: "/dialogs/4"},
        {id: 5, userName: "David", dialogUrl: "/dialogs/5"},
        {id: 6, userName: "Veronica", dialogUrl: "/dialogs/6"},
    ],
    textareaInput: "",
};

const dialogsReducer = (state: MessagesPageType = initState, action: ActionsType) => {

    switch (action.type) {
        case ADD_MSG:
            let newEntry = {id: 13, author: 'test', message: state.textareaInput};
            let newArray = [...state.messagesInChatRoom, newEntry];
            return {...state, messagesInChatRoom: newArray, textareaInput: ""};
        case NEW_MSG_TEXT:
            return {...state, textareaInput: action.text};
        default:
            return state;
    }
};

export default dialogsReducer;