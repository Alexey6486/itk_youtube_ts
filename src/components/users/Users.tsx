import React, {useEffect, useState} from "react";
import s from './style.module.css'
import {ApiUsersType} from "../../redux/store";
import axios from 'axios';
import userPhoto from '../../assets/images/post/user.png'

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

    // constructor(props: PropsType) {
    //     super(props);
    //     this.props = props;
    // }

    //const {users, followUser, unfollowUser, setUsers} = this.props;

    // let getUsers = () => {
    //     if (users.length === 0) {
    //         axios
    //             .get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(res => {
    //                 setUsers(res.data.items);
    //             });
    //     }
    // };
    //usersMap2 = this.props

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

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

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

        const pagesMap = pages.map(page => {
            return <button className={page === this.props.currentPage ? s.currentPage : ""} onClick={(e) => this.onPageChange(page)}>{page}</button>
        });

        return (
            <>
                <div className={s.paginationWrap}>
                    {pagesMap}
                </div>
                {/*<button onClick={getUsers}>get users</button>*/}
                <div>{usersMap}</div>
            </>
        );
    };

}

export default Users;