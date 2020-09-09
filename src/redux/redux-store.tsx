import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {profileReducer} from "../components/profile/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "../components/users/users-reducer";
import newsReducer from "../components/news/news-reducer";
import userProfile from "./userProfile-reducer";
import {authReducer} from "../components/login/auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {accountReducer} from "../components/profile/account-reducer";
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

export const _store = createStore(reducers, applyMiddleware(thunkMiddleware));

const middleware = [thunkMiddleware]

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

export const store = createStore(reducers, enhancer)
