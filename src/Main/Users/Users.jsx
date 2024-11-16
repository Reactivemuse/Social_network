import s from "./Users.module.css"
import User from "./User/User"
import axios from "axios"
import React from "react"

class Users extends React.Component{
  componentDidMount(){
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
    let UserItem = this.props.users
      .map(user => <User url={user.photos.small} id={user.id} followed={user.followed} name={user.name}
        description={user.status}
        addUnfollow={this.props.addUnfollow} addFollow={this.props.addFollow} />)
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }
    return(
      <div className={s.container}>
        <div className={s.pages}>
          {pages.map( data => {
            return (
              <span className={this.props.currentPage === data ? 
                s.selectedPage : s.page} onClick={(e) => { this.onPageChanged(data)}}>
                  {data}
              </span>
            )
          })}
        </div>
        {UserItem}
      </div>
    )
  }
}

export default Users