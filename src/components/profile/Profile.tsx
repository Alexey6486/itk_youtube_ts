import React from 'react';
import styles from './style.module.css'
import Addpost from "./postsBlock/addpost/Addpost";
import Posts from "./postsBlock/posts/Posts";
import ProfileData from "./profileData/ProfileData";

function Profile() {
    return (
        <div className={styles.profileBlock}>
            <ProfileData/>
            <Addpost/>
            <Posts/>
        </div>
    );
}

export default Profile;