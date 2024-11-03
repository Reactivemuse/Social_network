import s from "./Person.module.css"
import { NavLink } from "react-router-dom"
const Person = (props) => {
  return (
    <div className={s.people__item + ' ' + s.active}>
      <NavLink className={s.people__link + ' ' + s.active} to={"/Messages/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default Person