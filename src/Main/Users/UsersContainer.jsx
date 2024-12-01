import { addFollow, getUsersThunk, UnfollowUserThunk, followUserThunk } from "../../redux/users-reducer"
import React from "react"
import { connect } from "react-redux"
import Users from "./Users"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
  }

  render() {
    return(
      <Users 
      users={this.props.users}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      UnfollowUserThunk={this.props.UnfollowUserThunk}
      followUserThunk = {this.props.followUserThunk}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
  }
}

export default connect(mapStateToProps, { getUsersThunk, UnfollowUserThunk, followUserThunk })(UsersContainer)