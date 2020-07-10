import {connect} from "react-redux";
import {StateType, UserProfileType} from "../../redux/store";
import {Component} from "react";
import { UserProfile } from "./UserProfile";
import axios from "axios";
import React from 'react';
import {setUserProfileData} from '../../redux/userProfile-reducer'
import { withRouter, RouteComponentProps } from "react-router-dom";

type MapStateToPropsType = {
    lookingForAJob: boolean
    fullName: string
}
type MapDispatchToPropsType = {
    setUserProfileData: (userProfile: UserProfileType) => void
}
type userIdParamType = {
    userId: string
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<userIdParamType> & OwnPropsType;

class UserProfileContainer extends Component<PropsType>{

    componentDidMount(): void {
        const userId = this.props.match.params.userId;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfileData(res.data)
            })
    }

    render() {
        return (
            <UserProfile {...this.props}/>
        );
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        lookingForAJob: state.userProfilePage.lookingForAJob,
        fullName: state.userProfilePage.fullName,
    };
};

const WithURLDataContainerComponent = withRouter(UserProfileContainer);

export default connect(mapStateToProps, {setUserProfileData})(WithURLDataContainerComponent);