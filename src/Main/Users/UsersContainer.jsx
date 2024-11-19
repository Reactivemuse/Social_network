
import { addFollow, addUnfollow, setUsers, setCurrentPage, setTotalUsersCounts } from "../../redux/users-reducer"
import React from "react"
import { connect } from "react-redux"
import Users from "./Users"
import axios from "axios"

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
      responce => {
        this.props.setUsers(responce.data.items)
        this.props.setTotalUsersCounts(responce.data.totalCount)
      }
    )
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
      responce => {
        this.props.setUsers(responce.data.items)
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