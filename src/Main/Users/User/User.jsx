import s from "./User.module.css"
import userimage from "../../../assets/images/user.png"
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
        <img className={s.photo} src={props.url != null ? props.url : userimage}/>
        {props.followed === true ? 
        <button onClick={unfollowChange} className={s.button}>unfollow</button> : 
        <button onClick={followChange} className={s.button}>follow</button>}
      </div>
      <div className={s.description}>
        <div className={s.description_about}>
          <p className={s.name}>{props.name}</p>
          <p className={s.text}>{props.description == null ? "Описание пользователя отсутствует!" : props.description}</p>
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