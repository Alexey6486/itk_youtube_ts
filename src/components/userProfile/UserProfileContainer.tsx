import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import React, {Component} from "react";
import {UserProfile} from "./UserProfile";
import {getProfileThunkCreator} from '../../redux/userProfile-reducer'
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    lookingForAJob: boolean
    fullName: string
}
type MapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void
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

export default connect(mapStateToProps, {getProfileThunkCreator})(WithURLDataContainerComponent);