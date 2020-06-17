import React from 'react';
import styles from './style.module.css'
import Post from "./post/Post";
import { PostsType } from '../../../../redux/store';

type PropsType = {
    posts: Array<PostsType>
}

function Posts(props: PropsType) {

    const {posts} = props;

    const postsMap = posts.map((post) => {
        return <Post key={post.likes} message={post.message} likes={post.likes} />;
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