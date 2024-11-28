
import { addFollow, addUnfollow, setUsers, setCurrentPage, setTotalUsersCounts } from "../../redux/users-reducer"
import React from "react"
import { connect } from "react-redux"
import Users from "./Users"
import { getUsers } from "../../API/api"
class UsersContainer extends React.Component {
  componentDidMount() {
    getUsers(this.props.currentPage, this.props.pageSize).then(
      responce => {
        this.props.setUsers(responce.items)
        this.props.setTotalUsersCounts(responce.totalCount)
      }
    )
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    getUsers(pageNumber, this.props.pageSize).then(
      responce => {
        this.props.setUsers(responce.items)
      }
    )

  }

  render() {
    return(
      <Users 
      users={this.props.users}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      addFollow={this.props.addFollow}
      addUnfollow={this.props.addUnfollow}
      />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}



export default connect(mapStateToProps, 
  { addFollow, addUnfollow, setUsers, setCurrentPage, setTotalUsersCounts   })(UsersContainer)