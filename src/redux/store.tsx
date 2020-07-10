import {NewsStateType} from "./news-reducer";
import {AuthUserData} from "./auth-reducer";

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

export type UserProfileContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    id: number
    name: string
    location: LocationType
    status: string
    followed: boolean
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: UserProfileContactsType
    photos: PhotoType
    aboutMe: string
}

export type ApiUsersType = {
    id: number
    name: string
    photos: PhotoType
    status: string | null
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
    users: Array<ApiUsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    disabledIdArr: Array<number>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
    newsPage: Array<NewsStateType>
    userProfilePage: UserProfileType
    auth: AuthUserData
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
