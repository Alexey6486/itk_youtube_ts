import React from "react";
import styles from "./style.module.css"
import {UserBlock} from "./userBlock/UserBlock";
import { UsersInChatRoomType } from "../../../redux/store";

type PropsType = {
    usersInChatRoom: Array<UsersInChatRoomType>
}

export const UsersList = React.memo((props: PropsType) => {

    const {usersInChatRoom} = props;

    let usersInChatRoomMap = usersInChatRoom.map((user) => {
        return <UserBlock key={user.id} dialogUrl={user.dialogUrl} userName={user.userName} />
    });

    return (
        <div className={styles.usersList}>
            {usersInChatRoomMap}
        </div>
    );
});
