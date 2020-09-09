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
    captcha?: string
}
type PropsType = ExtraProps & {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    isAuth: boolean
}
type ExtraProps = {
    captchaUrl: string | null
}

const Login = (props: PropsType) => {

    const {isAuth, captchaUrl, loginThunkCreator} = props;

    const onSubmit = (formData: FormDataType) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return (
        <>
            <div className={s.loginFormTitle}>Login</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType, ExtraProps> & ExtraProps> = (props: PropsWithChildren<InjectedFormProps<FormDataType, ExtraProps>> & ExtraProps) => {

    const {captchaUrl} = props;

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
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <div className={s.loginFormGroup}>
                <Field component={Input} name="captcha" placeholder={'enter symbols'} validate={[requiredField]}/>
            </div>}
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

const LoginReduxForm = reduxForm<FormDataType, ExtraProps>({
    form: 'LoginForm',
})(LoginForm);

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login);