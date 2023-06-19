import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import sidebarReducer from "./sidebar-reducer.ts";
import usersReducer from "./users-reducer.ts";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
