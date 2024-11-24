import s from "./User.module.css"
import userimage from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom"
import axios from "axios"
const User = (props) => {

  let unfollowChange = () => {
    props.addUnfollow(props.id)
  }
  let followChange = () => {
    props.addFollow(props.id)
  }
  
  return (
    <div className={s.user}>
      <div className={s.user_state}>
        <NavLink to={`/Profile/${props.id}`}>
          <img className={s.photo} src={props.url != null ? props.url : userimage}/>
        </NavLink>
        {props.followed === true ? 
        <button onClick={ () => {
          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
            withCredentials: true,
            headers: {
              "API-KEY": "7f2efdc0-fd2c-4e71-aa63-a78d164bc576"
            }
          }).then(
            responce => {
              if (responce.data.resultCode === 0){
                props.addFollow(props.id)
              }
            }
          )
      }

        } className={s.button}>unfollow</button> : 
        <button onClick={ () => {
          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
            withCredentials: true,
            headers: {
              "API-KEY": "7f2efdc0-fd2c-4e71-aa63-a78d164bc576"
            }
          }).then(
            responce => {
              if (responce.data.resultCode === 0) {
                props.addUnfollow(props.id)
              }
            }
          )
        }
        } className={s.button}>follow</button>}
      </div>
      <div className={s.description}>
        <div className={s.description_about}>
          <p className={s.name}>{props.name}</p>
          <p className={s.text}>{props.description == null ? "" : props.description}</p>
        </div>
        <div className={s.description_place}>
          <p className={s.country}>{props.country}</p>
          <p className={s.city}>{props.city}</p>
        </div>
      </div>
    </div>
  )
}

export default User