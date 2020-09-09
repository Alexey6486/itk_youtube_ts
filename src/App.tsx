import React, {Component} from 'react';
import './App.module.css';
import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";

import styles from './App.module.css'
import {Route, withRouter, Switch} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import NewsContainer from "./components/news/NewsContainer";
import UserProfileContainer from "./components/userProfile/UserProfileContainer";
import HeaderContainer from './components/header/headerContainer';
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {StateType} from "./redux/store";
import {initAppTC} from "./redux/initReducer";
import {compose} from 'redux';
import {LoadingIcon} from "./components/common/loadingIcon/LoadingIcon";

//import ProfileContainer from "./components/profile/ProfileContainer";
//import {Dialogs} from "./components/dialogs/Dialogs";
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));
const Dialogs = React.lazy(() => import("./components/dialogs/Dialogs"));


class App extends Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.initAppTC();
    }

    render() {

        if (!this.props.init) {
            return <LoadingIcon/>
        }

        return (
            <div className={styles.wrapper}>
                <HeaderContainer/>
                <div className="container">
                    <div className={styles.mainContent}>
                        <Aside/>
                        <div className={styles.contentInner}>
                            <React.Suspense fallback={<LoadingIcon/>}>
                                <Switch>
                                    <Route path="/profile" render={() => <ProfileContainer/>}/>
                                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                                    <Route path="/users" render={() => <UsersContainer/>}/>
                                    <Route path="/news" render={() => <NewsContainer/>}/>
                                    <Route path="/userprofile/:userId" render={() => <UserProfileContainer/>}/>
                                    <Route path="/login" render={() => <Login/>}/>
                                </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    init: boolean
};
type MapDispatchToPropsType = {
    initAppTC: () => void
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        init: state.initApp.init
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initAppTC}))(App);

