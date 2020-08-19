import React from 'react';
import styles from './style.module.css'
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import { Textarea } from '../../../common/formsControl/FormsControl';
import {useDispatch} from "react-redux";

type PropsType = {
    addPostThunkCreator: (post: string) => void
}

function AddPost(props: PropsType) {

    const dispatch = useDispatch();
    const {addPostThunkCreator} = props;
    //const [err, setErr] = useState(false);

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
        dispatch(reset('PostForm'));
    }

    return (
        <>
            <div className={styles.postsTitle}>
                <h3>ADD POST:</h3>
            </div>
            <div className={styles.addPostBlock}>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
        </>
    );
}

export default AddPost;

type FormDataType = {
    post: string
}
const maxLength = maxLengthCreator(300);

const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'post'} placeholder={'Text your post...'}
                   validate={[requiredField, maxLength]}/>
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