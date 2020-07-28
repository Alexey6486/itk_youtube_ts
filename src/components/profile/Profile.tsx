import React from 'react';
import styles from './style.module.css'
import ProfileDataContainer from "./profileData/ProfileDataContainer";
import AddPostContainer from "./postsBlock/addpost/AddPostContainer";
import PostsContainer from "./postsBlock/posts/PostsContainer";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {AuthState} from "../../redux/auth-reducer";
//import {AuthRedirectComponent} from "../hoc/withAuthRedirect";

export const Profile = () => {

    const authState = useSelector<AppRootState, AuthState>(state => state.auth)
    const {isAuth} = authState;

    if (!isAuth) {
        return <Redirect to={`/login`}/>
    }

    return (
        <div className={styles.profileBlock}>
            <ProfileDataContainer/>
            <AddPostContainer/>
            <PostsContainer/>
        </div>
    );
};

//export const AuthProfileComponent = AuthRedirectComponent(Profile);
//jsx element type does not have any construct or call signatures
