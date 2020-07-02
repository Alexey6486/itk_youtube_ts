import React from 'react';
import './App.module.css';
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import styles from './App.module.css'
import {Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import NewsContainer from "./components/news/NewsContainer";

function App() {


    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className="container">
                <div className={styles.mainContent}>
                    <Aside/>
                    <div className={styles.contentInner}>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/dialogs" render={() => <Dialogs />}/>
                        <Route path="/users" render={() => <UsersContainer />}/>
                        <Route path="/news" render={() => <NewsContainer />}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
