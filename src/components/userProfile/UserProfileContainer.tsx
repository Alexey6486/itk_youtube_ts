import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import React, {Component} from "react";
import {UserProfile} from "./UserProfile";
import {getProfileThunkCreator, getStatusThunkCreator} from '../../redux/userProfile-reducer'
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    lookingForAJob: boolean
    fullName: string
    aboutMe: string,
    status: string | null,
    id: number,
}
type MapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
}
type userIdParamType = {
    userId: string
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<userIdParamType> & OwnPropsType;

class UserProfileContainer extends Component<PropsType> {

    componentDidMount(): void {
        const userId = this.props.match.params.userId;
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        return (
            <UserProfile {...this.props}/>
        );
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        lookingForAJob: state.userProfilePage.userData.lookingForAJob,
        fullName: state.userProfilePage.userData.fullName,
        aboutMe: state.userProfilePage.userData.aboutMe,
        status: state.userProfilePage.userStatus.status,
        id: state.userProfilePage.userData.userId,
    };
};

const WithURLDataContainerComponent = withRouter(UserProfileContainer);

export default connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator})(WithURLDataContainerComponent);