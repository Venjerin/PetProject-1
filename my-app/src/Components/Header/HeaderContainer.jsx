import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer.ts";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}></Header>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, { logout })(HeaderContainer);