import React from "react";
import s from "./style.module.css";
import userPhoto from "../../assets/images/post/user.png";
import {ApiUsersType} from "../../redux/store";
import {NavLink, Redirect} from "react-router-dom";

type PropsType = {
    users: Array<ApiUsersType>
    followUserApi: (id: number) => void
    unfollowUserApi: (id: number) => void
    disabledIdArr: Array<number>
    isAuth: boolean
}

export const Users = (props: PropsType) => {

    const {users, followUserApi, unfollowUserApi, disabledIdArr, isAuth} = props;

    const usersMap = users.map(user => {

        const friend = user.followed ? 'yes' : 'no';

        const followBtn = user.followed ? 'unfollow' : 'follow';

        const onclickHandler = () => {
            !user.followed ? followUserApi(user.id) : unfollowUserApi(user.id)
        };

        return (
            <div className={s.userWrap} key={user.id}>
                <div>Name: <NavLink to={`/userprofile/${user.id}`}>{user.name}</NavLink></div>
                <div>photo: <NavLink to={`/userprofile/${user.id}`}><img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar"/></NavLink></div>
                <div>Status: {user.status}</div>
                <div>Friend: {friend}</div>

                <button onClick={onclickHandler}
                        disabled={disabledIdArr.some(userId => userId === user.id)}>
                    {followBtn}
                </button>
            </div>
        )
    });

    if (!isAuth) {
        return <Redirect to={'/login'}/>;
    }
    return (
        <div>{usersMap}</div>
    );

};