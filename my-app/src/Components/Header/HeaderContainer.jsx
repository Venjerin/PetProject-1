import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData(authAPI)
    }

    render() {
        return <Header {...this.props}></Header>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);