
import s from "./Card.module.css"

const Card = (props) => {
  if (!props.profile){
    return (
      <div>...</div>
    )
  }

  return (
    <div className={s.cards}>
      <div className={s.cards__bg}></div>
      <div className={s.cards__item}>
        <img src= {props.profile.photos.small} alt="" className={s.cards__icon} />
        <p className={s.name}>{props.profile.fullName}</p>
        <p className={s.description}>{props.profile.aboutMe}</p>
        <p className={s.following}>Following</p>
        <p className={s.followers}>Followers</p>
        <a href="#" className={s.profile}>Your profile</a>
      </div>
    </div>
  )
}

export default Card
