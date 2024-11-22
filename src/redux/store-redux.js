import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer"
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebarPage: sidebarReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store;
