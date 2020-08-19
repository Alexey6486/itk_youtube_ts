import React from 'react';
import styles from './style.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    onLogoutClickHandler: () => void
}

export const Header = React.memo((props: PropsType) => {

    const {isAuth, onLogoutClickHandler} = props;

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.headerContent__logo}>Header</div>
                        <div className={styles.headerContent__loginBlock}>
                            {isAuth ? <p onClick={onLogoutClickHandler}>Logout</p> : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
});
