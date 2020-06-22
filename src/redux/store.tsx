import profileReducer, { AddPostACType, NewTextPostACType } from "./profile-reducer"
import dialogsReducer, {AddMsgACType, NewTextMsgACType} from "./dialogs-reducer";
import {NewsStateType} from "./news-reducer";

export type PostsType = {
    message: string
    likes: string
}
export type MessageType = {
    id: number
    author: string
    message: string
}
export type UsersInChatRoomType = {
    id: number
    userName: string
    dialogUrl: string
}
export type AsideBlockType = {

}
export type UsersType = {
    id: number
    name: string
    location: LocationType
    status: string
    followed: boolean
}
export type LocationType = {
    country: string
    city: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    textareaInput: string
}
export type MessagesPageType = {
    messagesInChatRoom: Array<MessageType>
    usersInChatRoom: Array<UsersInChatRoomType>
    textareaInput: string
}
export type UsersPageType = {
    users: Array<UsersType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
    newsPage: Array<NewsStateType>
}

//export type DispatchType = (action: ActionsType) => void

//export type ActionsType = AddPostACType | NewTextPostACType | AddMsgACType | NewTextMsgACType;

/*
export let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Greetings!', likes: '8'},
                {message: 'See you later!', likes: '17'},
            ],
            textareaInput: "",
        },
        messagesPage: {
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
        },
        asideBlock: {}
    },

    _callSubscriber(state: StateType) {},
    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void)  {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this.getState());
    },

};
*/
