import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {AuthState} from "../login/auth-reducer";
import {Redirect} from "react-router";
import React from "react";

export const AuthRedirectComponent = (Component: React.ComponentType<any>, props: any = null) => {

    const isAuthState = useSelector<AppRootState, AuthState>(state => state.auth);
    const {isAuth} = isAuthState;

    if (!isAuth) {
        return <Redirect to={'/login'}/>;
    }
    return <Component {...props}/>;
};

// export function AuthRedirectComponent<P extends PropsType>(Component: React.ComponentType<P>) {
//
//     const isAuthState = useSelector<AppRootState, AuthUserData>(state => state.auth);
//     const {isAuth} = isAuthState;
//
//     if (!isAuth) {
//         return <Redirect to={'/login'}/>;
//     }
//     return <Component {...P}/>;
// };