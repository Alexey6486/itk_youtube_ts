import React from "react";
import styles from './style.module.css'
import Message from "./message/Message";
import { MessageType } from "../../Dialogs";

type PropsType = {
    messages: Array<MessageType>
}

function MessagesBox(props: PropsType) {

    const messagesInChatRoomMap = props.messages.map((message) => {
        return <Message author={message.author} message={message.message} />
    });

    return (
        <div className={styles.messagesBox}>
            {messagesInChatRoomMap}
        </div>
    );
}

export default MessagesBox;