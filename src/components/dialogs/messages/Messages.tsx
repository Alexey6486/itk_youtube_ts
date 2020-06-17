import React from "react";
import styles from './style.module.css'
import MessagesBoxContainer from "./messagesBox/MessagesBoxContainer";
import NewMessageContainer from "./newMessage/NewMessageContainer";

function Messages() {

    return (
        <div className={styles.messagesBlock}>
            <MessagesBoxContainer />
            <NewMessageContainer />
        </div>
    );
}

export default Messages;