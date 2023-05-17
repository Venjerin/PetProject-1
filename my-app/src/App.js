import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { connect } from "react-redux";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router";
import { compose } from "redux";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import Preloader from "./Components/common/Preloader/Preloader";
import { initializeApp } from "./redux/app-reducer";
import { withSuspense } from "./hoc/withSuspense";

// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))

// import ProfileContainer from "./Components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader></Preloader>;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              Component={withSuspense(DialogsContainer)}
            ></Route>
            <Route
              path="/profile/:userId?"
              Component={withSuspense(ProfileContainer)}
            ></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/music" element={<Music></Music>}></Route>
            <Route path="/settings" element={<Settings></Settings>}></Route>
            <Route
              path="/users"
              element={<UsersContainer></UsersContainer>}
            ></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

function withRouter(App) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <App {...props} router={{ location, navigate, params }}></App>;
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
