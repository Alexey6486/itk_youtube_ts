import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "../components/profile/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "../components/users/users-reducer";
import newsReducer from "./news-reducer";
import userProfile from "./userProfile-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {accountReducer} from "./account-reducer";
import {reducer as formReducer} from 'redux-form';
import {initReducer} from "./initReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    userProfilePage: userProfile,
    auth: authReducer,
    accountReducer,
    form: formReducer,
    initApp: initReducer,
});

export type AppRootState = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
