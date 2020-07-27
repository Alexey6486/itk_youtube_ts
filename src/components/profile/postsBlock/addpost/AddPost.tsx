import React, {ChangeEvent, useState} from 'react';
import styles from './style.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {addPostThunkCreator} from "../../../../redux/profile-reducer";

type PropsType = {
    textareaInput: string
    changeText: (text: string) => void

    addPostThunkCreator: (post: string) => void
}

function AddPost(props: PropsType) {

    const {textareaInput, addPostThunkCreator, changeText} = props;
    const [err, setErr] = useState(false);

    // const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     if (e.currentTarget) {
    //         const text = e.currentTarget.value;
    //         changeText(text);
    //         setErr(false);
    //     }
    // };
    // const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (textareaInput.trim()) {
    //         addPost();
    //         setErr(false);
    //     } else {
    //         setErr(true);
    //     }
    // };

    const onSubmit = (formData: FormDataType) => {
        addPostThunkCreator(formData.post);
    }

    return (
        <>
            <div className={styles.postsTitle}>
                <h3>ADD POST:</h3>
            </div>
            <div className={err ? `${styles.addPostBlock} ${styles.err}` : `${styles.addPostBlock}`}>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
        </>
    );
}

export default AddPost;

type FormDataType = {
    post: string
}

const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'post'} placeholder={'Text your post...'}/>
            <button>I say...</button>
        </form>
    );
}
const PostReduxForm = reduxForm<FormDataType>({
    form: "PostForm"
})(PostForm);


// <form action="#" onSubmit={onSubmitHandler}>
//
//                     <textarea placeholder={err ? "Type your post please." : "Text your post..."}
//                               value={textareaInput}
//                               onChange={addTextHandler}/>
//
//     <input type="submit"
//            value="I say, ..."/>
// </form>