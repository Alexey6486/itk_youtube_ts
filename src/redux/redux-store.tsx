import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import userProfile from "./userProfile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    userProfilePage: userProfile,
});

const store = createStore(reducers);

export default store;