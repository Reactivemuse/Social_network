import s from "./User.module.css"
import userimage from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom"
import { UnfollowUser, followUser } from "../../../API/api"
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
          UnfollowUser(props.id).then(
            responce => {
              if (responce.resultCode == 0){
                props.addUnfollow(props.id)
              }
            }
          )
      }

        } className={s.button}>unfollow</button> : 
        <button onClick={ () => {
          followUser(props.id).then(
            responce => {
              if (responce.resultCode == 0) {
                props.addFollow(props.id)
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