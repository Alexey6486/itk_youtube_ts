import React, {Component} from "react";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import { connect } from "react-redux";
import {authThunkCreator} from "../../redux/auth-reducer";

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

    render() {
        return (
            <Profile />
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.payload.login,
        email: state.auth.payload.email,
        id: state.auth.payload.id,
    }
}

export default connect(mapStateToProps, {authThunkCreator})(ProfileContainer)