import s from "./Icon.module.css"
import { NavLink } from "react-router-dom"

const Icon = (props) => {
  return (
    <div className={s.item}>
      <a href={props.link} className={s.item__link}>{props.text}</a>
    </div>
  )
}

export default Icon