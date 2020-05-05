import React from 'react';
import styles from './style.module.css'
import Post from "./post/Post";
import { PostsType } from '../../Profile';

type PropsType = {
    posts: Array<PostsType>
}

function Posts(props: PropsType) {

    const postsMap = props.posts.map((post) => {
        return <Post message={post.message} likes={post.likes} />;
    });

    return (
        <>
            <div className={styles.postsTitle}>
                <h3>Posts:</h3>
            </div>
            <div className={styles.postsBlock}>
                {postsMap}
            </div>
        </>
    );
}

export default Posts;