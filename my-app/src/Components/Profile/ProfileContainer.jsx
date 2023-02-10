import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId, usersAPI)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}></Profile>
        )
    }
}

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            ></ProfileContainer>
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));