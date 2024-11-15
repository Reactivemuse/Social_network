import s from "./Users.module.css"
import User from "./User/User"
import axios from "axios"

const Users = (props) => {
  if (props.users.length === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      responce => {
        props.setUsers(responce.data.items)
      }
    )
    
  }

  let UserItem = props.users
    .map(user => <User url = {user.url} id={user.id} followed={user.followed} name={user.name} 
      description={user.status} 
      addUnfollow={props.addUnfollow} addFollow={props.addFollow}/>)

  return (
    <div className={s.container}>
      {UserItem}
    </div>
  )
}

export default Users