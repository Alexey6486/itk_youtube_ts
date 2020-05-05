import React from "react";
import styles from './style.module.css'

function NewMessage() {
    return (
        <div className={styles.newMessageBlock}>
            <form className={styles.newMessageForm}>
                <textarea placeholder="Text your message here..."></textarea>
                <button type="submit">I say, ...</button>
            </form>
        </div>
    );
}

export default NewMessage;