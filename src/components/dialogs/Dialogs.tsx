import React from "react";
import styles from './style.module.css'
import UsersList from "./usersList/UsersList";
import Messages from "./messages/Messages";

export type MessageType = {
    author: string
    message: string
}
const messagesInChatRoom: Array<MessageType> = [
    {author: "Jane", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {author: "Martin", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
];
export type UsersInChatRoomType = {
    id: number
    userName: string
    dialogUrl: string
}
const usersInChatRoom: Array<UsersInChatRoomType> = [
    {id: 1, userName: "John", dialogUrl: "/dialogs/1"},
    {id: 2, userName: "Jane", dialogUrl: "/dialogs/2"},
    {id: 3, userName: "Martin", dialogUrl: "/dialogs/3"},
    {id: 4, userName: "Marry", dialogUrl: "/dialogs/4"},
    {id: 5, userName: "David", dialogUrl: "/dialogs/5"},
    {id: 6, userName: "Veronica", dialogUrl: "/dialogs/6"},
];

function Dialogs() {
    return (
        <div className={styles.dialogsBlock}>
            <div className={styles.dialogsBlockTitle}>
                <h3>Chat room</h3>
            </div>
            <div className={styles.dialogsContent}>
                <UsersList usersinchatroom={usersInChatRoom}/>
                <Messages messages={messagesInChatRoom}/>
            </div>
        </div>
    );
}

export default Dialogs;
