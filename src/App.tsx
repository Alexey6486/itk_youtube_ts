import React from 'react';
import './App.module.css';
import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import styles from './App.module.css'
import {Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import NewsContainer from "./components/news/NewsContainer";
import UserProfileContainer from "./components/userProfile/UserProfileContainer";
import HeaderContainer from './components/header/headerContainer';
import {Login} from "./components/login/Login";


function App() {

    return (
        <div className={styles.wrapper}>
            <HeaderContainer/>
            <div className="container">
                <div className={styles.mainContent}>
                    <Aside/>
                    <div className={styles.contentInner}>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/dialogs" render={() => <Dialogs />}/>
                        <Route path="/users" render={() => <UsersContainer />}/>
                        <Route path="/news" render={() => <NewsContainer />}/>
                        <Route path="/userprofile/:userId" render={() => <UserProfileContainer />}/>
                        <Route path="/login" render={() => <Login />}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
