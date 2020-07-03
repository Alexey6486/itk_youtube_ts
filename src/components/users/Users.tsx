import React from "react";
import s from "./style.module.css";
import userPhoto from "../../assets/images/post/user.png";
import {ApiUsersType} from "../../redux/store";

type PropsType = {
    users: Array<ApiUsersType>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

export const Users = (props: PropsType) => {

    const {users, followUser, unfollowUser} = props;

    const usersMap = users.map(user => {

        const friend = user.followed ? 'yes' : 'no';
        const followBtn = user.followed ? 'unfollow' : 'follow';

        const onclickHandler = () => {
            !user.followed ? followUser(user.id) : unfollowUser(user.id);
        };

        return (
            <div className={s.userWrap} key={user.id}>
                <div>Name: {user.name}</div>
                <div>photo: <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar"/></div>
                <div>Status: {user.status}</div>
                <div>Friend: {friend}</div>
                <button onClick={onclickHandler}>{followBtn}</button>
            </div>
        )
    });

    return (
        <div>{usersMap}</div>
    );

};