import React from "react";
import styles from "./style.module.css"
import UserBlock from "./userBlock/UserBlock";

function UsersList() {
    return (
        <div className={styles.usersList}>
            <UserBlock dialogUrl="/dialogs/1" userName="John"/>
            <UserBlock dialogUrl="/dialogs/2" userName="Jane"/>
            <UserBlock dialogUrl="/dialogs/3" userName="Martin"/>
            <UserBlock dialogUrl="/dialogs/4" userName="Marry"/>
            <UserBlock dialogUrl="/dialogs/5" userName="David"/>
            <UserBlock dialogUrl="/dialogs/6" userName="Veronica"/>
        </div>
    );
}

export default UsersList;