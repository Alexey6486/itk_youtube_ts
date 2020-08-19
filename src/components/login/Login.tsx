import React, {PropsWithChildren} from "react";
import s from './login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";
import { connect } from "react-redux";
import {loginThunkCreator} from "./auth-reducer";
import { Redirect } from "react-router-dom";
import {StateType} from "../../redux/store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: PropsWithChildren<InjectedFormProps<FormDataType>>) => {

    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div className={s.loginFormGroup}>
                <Field component={Input} name="email" placeholder={'User Name'} validate={[requiredField]}/>
            </div>
            <div className={s.loginFormGroup}>
                <Field component={Input} name="password" type={'password'} placeholder={'Password'} validate={[requiredField]}/>
            </div>
            <div className={s.loginFormGroup}>
                <Field component={Input} name="rememberMe" type={'checkbox'} id={'loginCheckbox'}/>
                <label htmlFor="loginCheckbox">Remember me</label>
            </div>
            {
                props.error &&
                <div className={s.err}>
                    {props.error}
                </div>
            }
            <button className={s.loginFormSubmit}>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'LoginForm',
})(LoginForm);

type PropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: PropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return (
        <>
            <div className={s.loginFormTitle}>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login);