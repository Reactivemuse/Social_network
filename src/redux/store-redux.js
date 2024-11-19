import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer"

let reducers = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebarPage: sidebarReducer
});

let store = createStore(reducers);

window.store = store

export default store;
