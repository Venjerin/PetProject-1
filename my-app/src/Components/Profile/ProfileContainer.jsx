import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams,} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId;
        if (!userId) { userId = 2; }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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


export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));