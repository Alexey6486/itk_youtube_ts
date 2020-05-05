import React from 'react';
import styles from './style.module.css'
import {NavLink} from "react-router-dom";


function Aside() {
    return (
        <div className={styles.aside}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={styles.active}>Chat room</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Navigation link 3</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Aside;