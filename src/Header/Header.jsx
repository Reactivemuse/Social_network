import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import Icon from "./Icon/Icon";
import Logo from "./Logo/Logo"
import Search from "./Search/Search";

const Header = (props) => {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__item}>
          <Logo/>
          <Search/>
          <div className={s.icons}>
            <Icon link= "/Profile" text = "Profile"/>
            <Icon link="/Users" text="Users" />
            <Icon link="/Messages" text="Messages" />
            <Icon link="/News" text="News" />
            <Icon link="/Music" text="Music" />
            <Icon link="/Settings" text = "Settings"/>
          </div>
          <div className={s.login}>
            {console.log(props.login)}
            {props.isauthorised ? props.login: <NavLink to = "/Login">Login</NavLink>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
