import {connect} from "react-redux";
import {StateType, UserProfileType} from "../../redux/store";
import {Component} from "react";
import { UserProfile } from "./UserProfile";
import axios from "axios";
import React from 'react';
import {setUserProfileData} from '../../redux/userProfile-reducer'

type PropsType = {
    setUserProfileData: (userProfile: UserProfileType) => void
    //userId: number
    lookingForAJob: boolean
    fullName: string
}

class UserProfileContainer extends Component<PropsType>{

    componentDidMount(): void {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state: StateType) => {
    return {

        //userId: state.userProfilePage.userId,
        lookingForAJob: state.userProfilePage.lookingForAJob,
        fullName: state.userProfilePage.fullName,
    };
};

export default connect(mapStateToProps, {setUserProfileData})(UserProfileContainer);