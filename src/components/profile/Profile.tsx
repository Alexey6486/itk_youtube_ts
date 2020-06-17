import React from 'react';
import styles from './style.module.css'
import ProfileData from "./profileData/ProfileData";
import AddPostContainer from "./postsBlock/addpost/AddPostContainer";
import PostsContainer from "./postsBlock/posts/PostsContainer";

function Profile() {
    return (
        <div className={styles.profileBlock}>
            <ProfileData />
            <AddPostContainer />
            <PostsContainer />
        </div>
    );
}

export default Profile;