import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
// import { Routes, Route } from "react-router-dom";
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { Route, Routes } from 'react-router';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer></HeaderContainer>
      <Navbar></Navbar>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs"
            element={<DialogsContainer
              dispatch={props.dispatch}
              dialogs={props.state.profilePage.dialogs}
              messages={props.state.dialogsPage.messages}
              store={props.store}
              // addMessage={props.addMessage}
              newMessageText={props.state.dialogsPage.newMessageText}
            // updateNewMessage={props.updateNewMessage}
            ></DialogsContainer>}></Route>
          <Route path="/profile/:userId?"
            element={<ProfileContainer
              store={props.store}
              dispatch={props.dispatch}
              posts={props.state.profilePage.posts}
              // addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
            // updateNewPostText={props.updateNewPostText}
            ></ProfileContainer>}></Route>
          <Route path="/news"
            element={<News></News>}></Route>
          <Route path="/music"
            element={<Music></Music>}></Route>
          <Route path="/settings"
            element={<Settings></Settings>}></Route>
          <Route path="/users"
            element={<UsersContainer></UsersContainer>}>
          </Route>
          <Route path='/login'
            element={<LoginPage></LoginPage>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

