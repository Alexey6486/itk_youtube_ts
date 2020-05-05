import React from "react";
import styles from "./style.module.css"
import UserBlock from "./userBlock/UserBlock";
import { UsersInChatRoomType } from "../Dialogs";

type PropsType = {
    usersinchatroom: Array<UsersInChatRoomType>
}

function UsersList(props: PropsType) {

    let usersInChatRoomMap = props.usersinchatroom.map((user) => {
        return <UserBlock key={user.id} dialogUrl={user.dialogUrl} userName={user.userName} />
    });

    return (
        <div className={styles.usersList}>
            {usersInChatRoomMap}
        </div>
    );
}

export default UsersList;