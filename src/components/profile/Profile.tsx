import React from 'react';
import styles from './style.module.css'
import ProfileDataContainer from "./profileData/ProfileDataContainer";
import AddPostContainer from "./postsBlock/addpost/AddPostContainer";
import PostsContainer from "./postsBlock/posts/PostsContainer";
//import {AuthRedirectComponent} from "../hoc/withAuthRedirect";

export const Profile = () => {
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
