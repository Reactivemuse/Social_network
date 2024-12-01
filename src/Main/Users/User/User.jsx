import s from "./User.module.css"
import userimage from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom"
const User = (props) => {

  return (
    <div className={s.user}>
      <div className={s.user_state}>
        <NavLink to={`/Profile/${props.id}`}>
          <img className={s.photo} src={props.url != null ? props.url : userimage}/>
        </NavLink>

        {props.followed === true ? 
        <button onClick={ () => { props.UnfollowUserThunk(props.id) } } 
        className={s.button}>unfollow</button> : 
        <button onClick={ () => { props.followUserThunk(props.id) } } 
        className={s.button}>follow</button>}
        
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