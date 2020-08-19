import React from "react";
import styles from './style.module.css'
import MessagesBoxContainer from "./messagesBox/MessagesBoxContainer";
import NewMessageContainer from "./newMessage/NewMessageContainer";

export const Messages = React.memo(() => {
    console.log('render messages')
    return (
        <div className={styles.messagesBlock}>
            <MessagesBoxContainer />
            <NewMessageContainer />
        </div>
    );
});
