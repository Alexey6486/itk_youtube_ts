import {Component} from "react";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authThunkCreator, logoutThunkCreator} from "../login/auth-reducer";
import {StateType} from "../../redux/store";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    authThunkCreator: () => void
    logoutThunkCreator: () => void
}

class HeaderContainer extends Component<PropsType> {

    componentDidMount(): void {
        this.props.authThunkCreator();
    }

    onLogoutClickHandler = () => {
        this.props.logoutThunkCreator();
    }

    render() {
        return (
            <Header {...this.props} onLogoutClickHandler={this.onLogoutClickHandler}/>
        );
    }

}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.payload.login,
    email: state.auth.payload.email,
    id: state.auth.payload.id,
});

export default connect(mapStateToProps, {authThunkCreator, logoutThunkCreator})(HeaderContainer);