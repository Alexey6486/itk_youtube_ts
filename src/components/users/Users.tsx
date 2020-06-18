import React from "react";
import s from './style.module.css'
import {UsersType} from "../../redux/store";

type PropsType = {
    users: Array<UsersType>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

function Users(props: PropsType) {

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
                <div>City: {user.location.city}</div>
                <div>Status: {user.status}</div>
                <div>Friend: {friend}</div>
                <button onClick={onclickHandler}>{followBtn}</button>
            </div>
        )
    });

    return (
        <div>{usersMap}</div>
    );
}

export default Users;