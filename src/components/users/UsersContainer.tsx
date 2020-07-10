import {connect} from "react-redux";
import {StateType, ApiUsersType} from "../../redux/store";
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setLoading,
    setTotalUsersCount,
    followingInProgress
} from "../../redux/users-reducer";
import React from "react";
import {Pagination} from "../common/pagination/Pagination";
import {Users} from "./Users";
import { LoadingIcon } from "../common/loadingIcon/LoadingIcon";
import {usersAPI} from "../../api/api";

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
    followingInProgress: (isFetching: boolean, userId: number) => void
    disabledIdArr: Array<number>
}

class UsersContainer extends React.Component<PropsType> {


    onPageChange = (page: number) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(res => {
                this.props.setLoading(false);
                this.props.setUsers(res.items);
            });
    };

    componentDidMount(): void {
        this.props.setLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setLoading(false);
                this.props.setUsers(res.items);
                this.props.setTotalUsersCount(res.totalCount);
            });
    };

    followUserApi = (userId: number) => {
        this.props.followingInProgress(true, userId);
        usersAPI.followUserAxios(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    followUser(userId);
                }
                this.props.followingInProgress(false, userId);
            });
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items);
            });
    };

    unfollowUserApi = (userId: number) => {
        this.props.followingInProgress(true, userId);
        usersAPI.unfollowUserAxios(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    unfollowUser(userId);
                }
                this.props.followingInProgress(false, userId);
            });
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items);
            });
    };

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
                        : <Users followUserApi={this.followUserApi}
                                 unfollowUserApi={this.unfollowUserApi}
                                 users={this.props.users}
                                 disabledIdArr={this.props.disabledIdArr}/>
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
        isFetching: state.usersPage.isFetching,
        disabledIdArr: state.usersPage.disabledIdArr,
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



export default connect(mapToStateProps, {followingInProgress, followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setLoading})(UsersContainer);