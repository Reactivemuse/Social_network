import s from "./Messages.module.css"
import { NavLink } from "react-router-dom"
const Messages = () => {
  return (
    <div className={s.items}>
      <div className={s.people}>
        <div className={s.people__item + ' ' + s.active}>
          <NavLink className={s.people__link + ' ' + s.active} to="/Messages/1">IGOR</NavLink>
        </div>
        <div className={s.people__item}>
          <NavLink to="/Messages/2">DIMA</NavLink>
        </div>
        <div className={s.people__item}>
          <NavLink to="/Messages/3">ARTEM</NavLink>
        </div>
        <div className={s.people__item}>
          <NavLink to="/Messages/4">Kashirin</NavLink>
        </div>
        <div className={s.people__item}>
          <NavLink to="/Messages/5">Antipov</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.messages__item}>Винни чемпион</div>
        <div className={s.messages__item}>Привет</div>
        <div className={s.messages__item}>Винни чемпион</div>
        <div className={s.messages__item}>Нельзя писать state</div>
        <div className={s.messages__item}>Исправь блок схему</div>
      </div>
    </div>
  )
}

export default Messages