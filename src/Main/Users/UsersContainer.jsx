
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountsActionCreator } from "../../redux/users-reducer"

import { connect } from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageActionCreator(page))
    },
    setTotalUsersCounts: (totalCount) => {
      dispatch(setTotalUsersCountsActionCreator(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer