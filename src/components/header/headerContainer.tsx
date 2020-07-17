import {Component} from "react";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authThunkCreator} from "../../redux/auth-reducer";
import {StateType} from "../../redux/store";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    authThunkCreator: () => void
}

class HeaderContainer extends Component<PropsType> {

    componentDidMount(): void {
        this.props.authThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }

}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id,
});

export default connect(mapStateToProps, {authThunkCreator})(HeaderContainer);