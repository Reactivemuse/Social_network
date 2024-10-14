import s from "./Main.module.css"
import Card from "./Card/Card"
import Profile from "./Profile/Profile"

const Main = () => {
  
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card/>
          <Profile/>
        </div>
      </div>
    </main>
  )
}
export default Main