import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import userProfile from "./userProfile-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {accountReducer} from "./account-reducer";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    userProfilePage: userProfile,
    auth: authReducer,
    accountReducer,
    form: formReducer,
});

export type AppRootState = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
