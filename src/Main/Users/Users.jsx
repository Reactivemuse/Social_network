import s from "./Users.module.css"
import User from "./User/User"
import axios from "axios"
import React from "react"
class Users extends React.Component{
  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      responce => {
        this.props.setUsers(responce.data.items)
      }
    )
  }

  render() {
    let UserItem = this.props.users
      .map(user => <User url={user.url} id={user.id} followed={user.followed} name={user.name}
        description={user.status}
        addUnfollow={this.props.addUnfollow} addFollow={this.props.addFollow} />)
    return(
      <div className={s.container}>
        {UserItem}
      </div>
    )
  }
}

export default Users