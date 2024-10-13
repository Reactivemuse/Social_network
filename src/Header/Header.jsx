import s from "./Header.module.css"
import Icon from "./Icon/Icon";
import Logo from "./Logo/Logo"
import Search from "./Search/Search";

const Header = () => {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__item}>
          <Logo/>
          <Search/>
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
