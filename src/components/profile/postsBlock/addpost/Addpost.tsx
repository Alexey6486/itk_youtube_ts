import React from 'react';
import styles from './style.module.css'

function Addpost() {
    return (
        <>
            <div className={styles.postsTitle}>
                <h3>ADD POST:</h3>
            </div>
            <div className={styles.addPostBlock}>
                <form action="">
                    <textarea placeholder="Text your post..."></textarea>
                    <input type="submit" value="I say, ..."/>
                </form>
            </div>
        </>
    );
}

export default Addpost;