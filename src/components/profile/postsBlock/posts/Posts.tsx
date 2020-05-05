import React from 'react';
import styles from './style.module.css'
import Post from "./post/Post";

function Posts() {
    return (
        <>
            <div className={styles.postsTitle}>
                <h3>Posts:</h3>
            </div>
            <div className={styles.postsBlock}>
                <Post message='Greetings!' likes='4'/>
                <Post message='See you later!' likes='17'/>
            </div>
        </>
    );
}

export default Posts;