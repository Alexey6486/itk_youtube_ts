import React from "react";
import styles from './style.module.css'
import UsersList from "./usersList/UsersList";
import Messages from "./messages/Messages";

function Dialogs() {
    return (
        <div className={styles.dialogsBlock}>
            <div className={styles.dialogsBlockTitle}>
                <h3>Chat room</h3>
            </div>
            <div className={styles.dialogsContent}>
                <UsersList/>
                <Messages/>
            </div>
        </div>
    );
}

export default Dialogs;
