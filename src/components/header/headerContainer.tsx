import {Component} from "react";
import React from "react";
import {Header} from "./Header";
import axios from 'axios'
import {connect} from "react-redux";
import {AuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/store";

type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    setAuthUserData: (userData: AuthUserData) => void
}

class HeaderContainer extends Component<PropsType> {

    componentDidMount(): void {

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(res => {
                debugger
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            });
    }

    render() {
        debugger
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);