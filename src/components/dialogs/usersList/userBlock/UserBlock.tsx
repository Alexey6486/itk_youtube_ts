import React from "react";
import styles from "./style.module.css"
import { NavLink } from "react-router-dom";

type PropsType = {
    dialogUrl: string
    userName: string
}

export const UserBlock = React.memo((props: PropsType) => {

    return (
        <div className={styles.userBlock}>
            <NavLink to={props.dialogUrl} activeClassName={styles.active}>{props.userName}</NavLink>
        </div>
    );
});
