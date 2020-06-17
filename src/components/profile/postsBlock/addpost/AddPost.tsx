import React, {ChangeEvent, useState} from 'react';
import styles from './style.module.css'

type PropsType = {
    textareaInput: string
    addPost: () => void
    changeText: (text: string) => void
}

function AddPost(props: PropsType) {

    const {textareaInput, addPost, changeText} = props;
    const [err, setErr] = useState(false);

    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const text = e.currentTarget.value;
            changeText(text);
            setErr(false);
        }
    };
    const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (textareaInput.trim()) {
            addPost();
            setErr(false);
        } else {
            setErr(true);
        }
    };

    return (
        <>
            <div className={styles.postsTitle}>
                <h3>ADD POST:</h3>
            </div>
            <div className={err ? `${styles.addPostBlock} ${styles.err}` : `${styles.addPostBlock}`}>
                <form action="#" onSubmit={onSubmitHandler}>

                    <textarea placeholder={err ? "Type your post please." : "Text your post..."}
                              value={textareaInput}
                              onChange={addTextHandler}/>

                    <input type="submit"
                           value="I say, ..."/>
                </form>
            </div>
        </>
    );
}

export default AddPost;