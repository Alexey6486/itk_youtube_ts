import React from "react";
import styles from './style.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";

type PropsType = {
    textareaInput: string
    addMessageThunkCreator: (message: string) => void
}

type FormDataType = {
    message: string
}

export const NewMessage = React.memo((props: PropsType) => {

    const {addMessageThunkCreator} = props;
    // const [err, setErr] = useState(false);

    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     if (e.currentTarget) {
    //         const arr = e.currentTarget.value;
    //         changeText(arr);
    //         setErr(false);
    //     }
    // };

    // const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (textareaInput.trim()) {
    //         addMessage();
    //         setErr(false);
    //     } else {
    //         setErr(true);
    //     }
    // };

    const onSubmit = (formData: FormDataType) => {
        addMessageThunkCreator(formData.message);
    }

    return (
        <div className={styles.newMessageBlock}>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    );
})

const maxLength = maxLengthCreator(150);

const MessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"message"} placeholder={'Text your message here...'}
                   validate={[requiredField, maxLength]}/>
            <button>I say, ...</button>
        </form>
    )
};

const MessageReduxForm = reduxForm<FormDataType>({
    form: 'MessageForm'
})(MessageForm);

// <form className={err ? `${styles.newMessageForm} ${styles.err}` : `${styles.newMessageForm}`}
//       onSubmit={onSubmitHandler}>
//
//                 <textarea placeholder={err ? "Type your message please." : "Text your message here..."}
//                           value={textareaInput}
//                           onChange={onChangeHandler}/>
//
//     <button type="submit">I say, ...</button>
// </form>