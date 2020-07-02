import React, {useEffect, useState} from "react";
import s from './style.module.css'
import {ApiUsersType} from "../../redux/store";
import axios from 'axios';
import userPhoto from '../../assets/images/post/user.png'
import { Pagination } from "../pagination/Pagination";

type PropsType = {
    users: Array<ApiUsersType>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: Array<ApiUsersType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends React.Component<PropsType> {

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    };

    componentDidMount(): void {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                });
        }
    }

    render() {

        const usersMap = this.props.users.map(user => {

            const friend = user.followed ? 'yes' : 'no';
            const followBtn = user.followed ? 'unfollow' : 'follow';

            const onclickHandler = () => {
                !user.followed ? this.props.followUser(user.id) : this.props.unfollowUser(user.id);
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
            <>
                <Pagination totalItemsCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            changePageFunction={this.onPageChange}
                            portionSize={5}/>
                {/*<button onClick={getUsers}>get users</button>*/}
                <div>{usersMap}</div>
            </>
        );
    };

}

export default Users;