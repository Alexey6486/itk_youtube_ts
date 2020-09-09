import React from "react";
import styles from './style.module.css'
import {Messages} from "./messages/Messages";
import {UsersListContainer} from "./usersList/UserListContainer";
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {AuthState} from "../login/auth-reducer";
import {Redirect} from "react-router-dom";

const Dialogs = React.memo(() => {
    console.log('render dialogs')
    const authState = useSelector<AppRootState, AuthState>(state => state.auth)
    const {isAuth} = authState;

    if (!isAuth) {
        return <Redirect to={`/login`}/>
    }

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
});

export default Dialogs;
