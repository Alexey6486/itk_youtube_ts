import React from 'react';
import styles from './style.module.css'
import Addpost from "./postsBlock/addpost/Addpost";
import Posts from "./postsBlock/posts/Posts";
import ProfileData from "./profileData/ProfileData";

export type PostsType = {
    message: string
    likes: string
}
const posts: Array<PostsType> =[
    {message: 'Greetings!', likes: '8'},
    {message: 'See you later!', likes: '17'},
];

function Profile() {
    return (
        <div className={styles.profileBlock}>
            <ProfileData/>
            <Addpost/>
            <Posts posts={posts}/>
        </div>
    );
}

export default Profile;