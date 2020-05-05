import React from "react";
import styles from './style.module.css'
import MessagesBox from "./messagesBox/MessagesBox";
import NewMessage from "./messagesBox/newMessage/NewMessage";

function Messages() {
    return (
        <div className={styles.messagesBlock}>
            <MessagesBox/>
            <NewMessage/>
        </div>
    );
}

export default Messages;