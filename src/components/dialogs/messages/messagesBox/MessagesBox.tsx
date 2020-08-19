import React from "react";
import styles from './style.module.css'
import {Message} from "./message/Message";
import { MessageType } from "../../../../redux/store";

type PropsType = {
    messages: Array<MessageType>
}

export const MessagesBox = React.memo((props: PropsType) => {
    console.log('render msgbox')
    const {messages} = props;

    const messagesInChatRoomMap = messages.map((message) => {
        return <Message key={message.id} author={message.author} message={message.message} />
    });

    return (
        <div className={styles.messagesBox}>
            {messagesInChatRoomMap}
        </div>
    );
});
