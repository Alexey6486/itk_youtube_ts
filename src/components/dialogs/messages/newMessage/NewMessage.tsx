import React, {ChangeEvent, useState} from "react";
import styles from './style.module.css'

type PropsType = {
    textareaInput: string
    addMessage: () => void
    changeText: (text: string) => void
}

function NewMessage(props: PropsType) {

    const {textareaInput, addMessage, changeText} = props;
    const [err, setErr] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const arr = e.currentTarget.value;
            changeText(arr);
            setErr(false);
        }
    };

    const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (textareaInput.trim()) {
            addMessage();
            setErr(false);
        } else {
            setErr(true);
        }
    };

    return (
        <div className={styles.newMessageBlock}>
            <form className={err ? `${styles.newMessageForm} ${styles.err}` : `${styles.newMessageForm}`}
                  onSubmit={onSubmitHandler}>

                <textarea placeholder={err ? "Type your message please." : "Text your message here..."}
                          value={textareaInput}
                          onChange={onChangeHandler}/>

                <button type="submit">I say, ...</button>
            </form>
        </div>
    );
}

export default NewMessage;