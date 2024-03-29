import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer.ts";
import { Navigate, useLocation, useNavigate, useParams, } from "react-router";
import { usersAPI } from "../../api/api.ts";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId, usersAPI);
    this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // let userId = this.props.router.params.userId;
    // if (!userId) {
    //     userId = this.props.authorisedUserId;
    //     if (!userId){
    //         this.props.history.push("/login");
    //     }
    // }
    // this.props.getUserProfile(userId, usersAPI);
    // this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        savePhoto = {this.props.savePhoto}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      ></Profile>
    );
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer); 

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth:state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);  