import {StateType} from "../../../redux/store";
import {ProfileData} from "./ProfileData";
import {connect} from "react-redux";
import {Component} from "react";
import React from "react";
import {getMyStatusThunkCreator, updateStatusThunkCreator} from "../account-reducer";
import {getProfileThunkCreator} from "../../../redux/userProfile-reducer";

type StatePropsType = {
    status: string
    myId: number | null
    login: string | null
    ava: string | null
}
type DispatchType = {
    updateStatusThunkCreator: (status: string) => void
    getMyStatusThunkCreator: (userId: string) => void
    getProfileThunkCreator: (userId: string) => void
}
type PropsType = StatePropsType & DispatchType;

class ProfileDataContainer extends Component<PropsType> {

    updateStatus = (status: string) => {
        this.props.updateStatusThunkCreator(status);
    }

    componentDidMount(): void {
        if (this.props.myId !== null) {
            this.props.getMyStatusThunkCreator(this.props.myId.toString())
            this.props.getProfileThunkCreator(this.props.myId.toString())
        }
    }

    render() {
        return (
            <ProfileData ava={this.props.ava} status={this.props.status} userName={this.props.login} updateStatus={this.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        status: state.accountReducer.myStatus.status,
        myId: state.auth.payload.id,
        login: state.auth.payload.login,
        ava: state.userProfilePage.userData.photos.large
    }
}

export default connect(mapStateToProps, {updateStatusThunkCreator, getMyStatusThunkCreator, getProfileThunkCreator})(ProfileDataContainer)