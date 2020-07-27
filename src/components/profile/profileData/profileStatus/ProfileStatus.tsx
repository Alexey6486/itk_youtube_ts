import React, {ChangeEvent, Component} from "react";
import s from './style.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            this.setState({
                status: e.currentTarget.value
            });
        }
    }
    onDoubleClickHandler = () => {
        this.setState({
            editMode: true
        });
    };
    onBlurHandler = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    render() {
        return (
            <>
                {
                    !this.state.editMode ? <div className={s.status}
                                                onDoubleClick={this.onDoubleClickHandler}>{this.props.status}</div>

                                         : <input className={s.inputStatus}
                                                  value={this.state.status}
                                                  onBlur={this.onBlurHandler}
                                                  onChange={(e) => this.onChangeStatusHandler(e)}
                                                  autoFocus/>
                }
            </>
        )
    }

}