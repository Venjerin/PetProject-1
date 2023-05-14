import React from "react";


class ProfileStatus extends React.Component {

    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        });

    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea ref={this.statusInputRef} onChange={this.onStatusChange}
                            autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}>
                        </textarea>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;