import React from 'react';
import styles from './style.module.css'
import {useDispatch} from "react-redux";
import { removePostTC } from '../../../profile-reducer';
//import userLogo from './../../../../../assets/images/post/user.svg'

type PropsType = {
    message: string
    likes: string
    postId: string
}

function Post(props: PropsType) {

    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(removePostTC(props.postId));
    }

    return (
        <>
            <div className={styles.postItem}>
                <div className={styles.likesBlock}>
                    <div className={styles.likesBlock__thumbImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                            <g>
                                <g>
                                    <path d="M83.578,167.256H16.716C7.524,167.256,0,174.742,0,183.971v300.881c0,9.225,7.491,16.713,16.716,16.713h66.862
                                        c9.225,0,16.716-7.489,16.716-16.713V183.971C100.294,174.742,92.769,167.256,83.578,167.256z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M470.266,167.256c-2.692-0.456-128.739,0-128.739,0l17.606-48.032c12.148-33.174,4.283-83.827-29.424-101.835
                                        c-10.975-5.864-26.309-8.809-38.672-5.697c-7.09,1.784-13.321,6.478-17.035,12.767c-4.271,7.233-3.83,15.676-5.351,23.696
                                        c-3.857,20.342-13.469,39.683-28.354,54.2c-25.952,25.311-106.571,98.331-106.571,98.331v267.45h278.593
                                        c37.592,0.022,62.228-41.958,43.687-74.749c22.101-14.155,29.66-43.97,16.716-66.862c22.102-14.155,29.66-43.97,16.716-66.862
                                        C527.572,235.24,514.823,174.792,470.266,167.256z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {props.likes}
                </div>
                <div className={styles.removeBtn} onClick={removeHandler}>
                    remove
                </div>
                <div className={styles.postItem__avatar}>
                    {/*<img src={userLogo} alt=""/>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512">
                        <path d="M68.169,447.023C71.835,449.023,159.075,496,256,496c105.008,0,184.772-47.134,188.116-49.14A8,8,0,0,0,448,440c0-64.593-19.807-123.7-55.771-166.442-25.158-29.9-56.724-50.28-91.539-59.662a104,104,0,1,0-89.38,0c-34.815,9.382-66.381,29.765-91.539,59.662C83.807,316.3,64,375.407,64,440A8,8,0,0,0,68.169,447.023ZM168,120a88,88,0,1,1,88,88A88.1,88.1,0,0,1,168,120ZM132.013,283.859C164.5,245.258,208.528,224,256,224s91.5,21.258,123.987,59.859c32.681,38.838,51.056,92.48,51.977,151.474C414.845,444.6,343.708,480,256,480c-81.11,0-157.5-35.609-175.96-44.856C81,376.223,99.367,322.656,132.013,283.859Z"/>
                    </svg>
                </div>
                <div className={styles.postItem__inner}>
                    <div className={styles.postItem__author}>
                        John Doe
                    </div>
                    <div className={styles.postItem__text}>
                        {props.message}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;