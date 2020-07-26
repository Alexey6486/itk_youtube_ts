import React, {Component} from "react";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import { connect } from "react-redux";
import {authThunkCreator} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    authThunkCreator: () => void
}

class ProfileContainer extends Component<PropsType> {

    componentDidMount(): void {
        this.props.authThunkCreator();
    }

    authCheck = this.props.isAuth ? <Profile /> : <p>denied</p>;

    render() {
        return (
            this.authCheck
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id,
    }
}

export default connect(mapStateToProps, {authThunkCreator})(ProfileContainer)