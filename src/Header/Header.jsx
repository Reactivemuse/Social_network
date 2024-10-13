import s from "./Header.module.css"
import Icon from "./Icon/Icon";
const Header = () => {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__item}>
          <div className={s.logo}>
            <img src="https://img.freepik.com/premium-photo/3d-object-a-conceptual-logo-3d-rendering_1148436-1909.jpg?w=826" alt="#" className={s.logo__img} />
            <input  className={s.input}/>
          </div>
          <div className={s.search}>
          </div>
          <div className={s.icons}>
            <Icon text = "Profile"/>
            <Icon text="Messages" />
            <Icon text="News" />
            <Icon text="Music" />
            <Icon text = "Settings"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
