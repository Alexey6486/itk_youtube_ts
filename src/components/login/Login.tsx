import React from "react";
import s from './login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div className={s.loginFormGroup}>
                <Field component={'input'} name="login" placeholder={'User Name'}/>
            </div>
            <div className={s.loginFormGroup}>
                <Field component={'input'} name="password" placeholder={'Password'}/>
            </div>
            <div className={s.loginFormGroup}>
                <Field component={'input'} name="rememberMe" type={'checkbox'} id={'loginCheckbox'}/>
                <label htmlFor="loginCheckbox">Remember me</label>
            </div>
            <button className={s.loginFormSubmit}>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'LoginForm',
})(LoginForm);

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {

    }

    return (
        <>
            <div className={s.loginFormTitle}>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};