import React from 'react';
import s from './UserProfile.module.css'
import {LoadingIcon} from "../common/loadingIcon/LoadingIcon";

type PropsType = {
    //userId: number
    lookingForAJob: boolean
    fullName: string,
}

export const UserProfile = (props: PropsType) => {
    if (!props) {
        return <LoadingIcon/>
    }
    return (
        <>
            {/*<div className={s.userProfileTitle}>userId: {userId}</div>*/}
            <div>lookingForAJob: {props.lookingForAJob ? 'true' : 'false'}</div>
            <div>fullName: {props.fullName}</div>
        </>
    );
};