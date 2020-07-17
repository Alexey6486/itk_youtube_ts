import {connect} from "react-redux";
import {StateType, ApiUsersType} from "../../redux/store";
import {
    getUsersThunkCreator,
    getUsersOnPageChangeThunkCreator,
    unfollowUserThunkCreator,
    followUserThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import {Pagination} from "../common/pagination/Pagination";
import {Users} from "./Users";
import { LoadingIcon } from "../common/loadingIcon/LoadingIcon";

type PropsType = {
    users: Array<ApiUsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    disabledIdArr: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getUsersOnPageChangeThunkCreator: (page: number, pageSize: number) => void
    followUserThunkCreator: (userId: number) => void
    unfollowUserThunkCreator: (userId: number) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<PropsType> {


    onPageChange = (page: number) => {
        // this.props.setLoading(true);
        // this.props.setCurrentPage(page);
        // usersAPI.getUsers(page, this.props.pageSize)
        //     .then(res => {
        //         this.props.setLoading(false);
        //         this.props.setUsers(res.items);
        //     });
        this.props.getUsersOnPageChangeThunkCreator(page, this.props.pageSize);
    };

    componentDidMount(): void {
        // this.props.setLoading(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(res => {
        //         this.props.setLoading(false);
        //         this.props.setUsers(res.items);
        //         this.props.setTotalUsersCount(res.totalCount);
        //     });
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    followUserApi = (userId: number) => {

        // this.props.followingInProgress(true, userId);
        // usersAPI.followUserAxios(userId)
        //     .then(res => {
        //         if (res.resultCode === 0) {
        //             this.props.followUser(userId);
        //         }
        //         this.props.followingInProgress(false, userId);
        //     });
        this.props.followUserThunkCreator(userId);
    };

    unfollowUserApi = (userId: number) => {

        // this.props.followingInProgress(true, userId);
        // usersAPI.unfollowUserAxios(userId)
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             this.props.unfollowUser(userId);
        //         }
        //         this.props.followingInProgress(false, userId);
        //     });
        this.props.unfollowUserThunkCreator(userId);
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
                                 disabledIdArr={this.props.disabledIdArr}
                                 isAuth={this.props.isAuth}/>
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
        isAuth: state.auth.isAuth
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

export default connect(mapToStateProps, {unfollowUserThunkCreator,
                                         followUserThunkCreator,
                                         getUsersThunkCreator,
                                         getUsersOnPageChangeThunkCreator})(UsersContainer);