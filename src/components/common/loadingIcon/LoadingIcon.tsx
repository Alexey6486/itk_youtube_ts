import React from "react";
import loadingIcon from "../../../assets/images/loading.svg";
import s from './LoadingIcon.module.css';

export const LoadingIcon = () => {

    return (
        <div className={s.loadingIcon}>
            <img src={loadingIcon} alt={'loading icon'}/>
        </div>
    );

};