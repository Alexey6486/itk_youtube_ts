import React from 'react';
import s from './UserProfile.module.css'
import {LoadingIcon} from "../common/loadingIcon/LoadingIcon";

type PropsType = {
    //userId: number
    lookingForAJob: boolean
    fullName: string,
    aboutMe: string,
    status: string | null,
    id: number
}

export const UserProfile = (props: PropsType) => {
    if (!props) {
        return <LoadingIcon/>
    }
    return (
        <>
            {/*<div className={s.userProfileTitle}>userId: {userId}</div>*/}
            <div>id: {props.id}</div>
            <div>lookingForAJob: {props.lookingForAJob ? 'true' : 'false'}</div>
            <div>fullName: {props.fullName}</div>
            <div>about me: {props.aboutMe}</div>
            <div>status: {props.status}</div>
        </>
    );
};