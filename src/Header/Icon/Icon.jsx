import s from "./Icon.module.css"
import { NavLink } from "react-router-dom"

const Icon = (props) => {
  return (
    
    <div className={s.item}>
      <NavLink to={props.link} className={s.item__link}>{props.text}</NavLink>
    </div>
  )
}

export default Icon