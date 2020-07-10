import React from 'react';
import styles from './style.module.css'
import {NavLink} from "react-router-dom";
import {AuthUserData} from "../../redux/auth-reducer";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const Header = (props: PropsType) => {

    const {isAuth, login, email, id} = props;

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.headerContent__logo}>Header</div>
                        <div className={styles.headerContent__loginBlock}>
                            {isAuth ? <p>{login}</p> : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
