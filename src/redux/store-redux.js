import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer"
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk"

let reducers = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebarPage: sidebarReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;
