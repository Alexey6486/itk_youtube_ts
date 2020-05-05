import React from "react";
import styles from './style.module.css'
import MessagesBox from "./messagesBox/MessagesBox";
import NewMessage from "./messagesBox/newMessage/NewMessage";
import {MessageType} from "../Dialogs";

type PropsType = {
    messages: Array<MessageType>
}

function Messages(props: PropsType) {
    return (
        <div className={styles.messagesBlock}>
            <MessagesBox messages={props.messages}/>
            <NewMessage/>
        </div>
    );
}

export default Messages;