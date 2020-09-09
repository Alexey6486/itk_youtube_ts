import React, {Component} from 'react';
import styles from './style.module.css'
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import {ReactComponent as AvaIcon} from '../../../assets/images/post/user.svg';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    userName: string | null
    ava: string | null
}

export class ProfileData extends Component<PropsType> {


    render() {
        return (
            <div className={styles.profileData}>
                <div className={styles.profileData__title}>
                    <h3>PROFILE</h3>
                </div>
                <div className={styles.profileDataContent}>
                    <div className={styles.profileDataContent__avatar}>
                        {this.props.ava ? <img src={this.props.ava}/> : <AvaIcon/>}
                    </div>
                    <div className={styles.profileDataContent__info}>
                        <div className={styles.profileDataContent__name}>
                            <h2>{this.props.userName}</h2>
                        </div>
                        <div className={styles.profileDataContent__position}>
                            <h3>WEB Developer</h3>
                        </div>
                        <div className={styles.profileStatusWrap}>
                            Status:<ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
