
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from "../../redux/users-reducer"

import { connect } from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addFollow: (id) => {
      dispatch(followActionCreator(id))
    },
    addUnfollow: (id) => {
      dispatch(unFollowActionCreator(id))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer