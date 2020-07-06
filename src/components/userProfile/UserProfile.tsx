import React from 'react';
import s from './UserProfile.module.css'

type PropsType = {
    //userId: number
    lookingForAJob: boolean
    fullName: string,
}

export const UserProfile = (props: PropsType) => {

    return (
        <>
            {/*<div className={s.userProfileTitle}>userId: {userId}</div>*/}
            <div>lookingForAJob: {props.lookingForAJob ? 'true' : 'false'}</div>
            <div>fullName: {props.fullName}</div>
        </>
    );
};