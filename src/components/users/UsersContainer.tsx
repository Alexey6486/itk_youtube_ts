import {connect} from "react-redux";
import {StateType, ApiUsersType} from "../../redux/store";
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setLoading, setTotalUsersCount
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Pagination} from "../common/pagination/Pagination";
import {Users} from "./Users";
import { LoadingIcon } from "../common/loadingIcon/LoadingIcon";

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
    isFetching: boolean
    setLoading: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<PropsType> {

    onPageChange = (page: number) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setLoading(false);
                this.props.setUsers(res.data.items);
            });
    };

    componentDidMount(): void {
        this.props.setLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setLoading(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    render() {

        return (

            <>
                <Pagination totalItemsCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            changePageFunction={this.onPageChange}
                            portionSize={5}/>

                {
                    this.props.isFetching
                        ? <LoadingIcon />
                        : <Users followUser={this.props.followUser}
                                 unfollowUser={this.props.unfollowUser}
                                 users={this.props.users}/>
                }

            </>
        );
    };

}

const mapToStateProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
// const mapDispatchToProps = (dispatch: DispatchTypeUsersReducer) => {
//     return {
//         followUser: (id: number) => {dispatch(followUserActionCreator(id))},
//         unfollowUser: (id: number) => {dispatch(unfollowUserActionCreator(id))},
//         setUsers: (users: Array<ApiUsersType>) => {dispatch(setUserActionCreator(users))},
//         setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageActionCreator(currentPage))},
//         setTotalUsersCount: (totalUsersCount: number) => {dispatch(setTotalUserCountActionCreator(totalUsersCount))},
//         setLoading: (isFetching: boolean) => {dispatch(setLoadingActionCreator(isFetching))},
//     }
// };



export default connect(mapToStateProps, {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setLoading})(UsersContainer);