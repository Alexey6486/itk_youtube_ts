import React from "react";
import styles from './style.module.css'
import Messages from "./messages/Messages";
import UsersListContainer from "./usersList/UserListContainer";

function Dialogs() {

    return (
        <div className={styles.dialogsBlock}>
            <div className={styles.dialogsBlockTitle}>
                <h3>Chat room</h3>
            </div>
            <div className={styles.dialogsContent}>
                <UsersListContainer />
                <Messages />
            </div>
        </div>
    );
}

export default Dialogs;
