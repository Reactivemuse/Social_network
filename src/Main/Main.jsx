import s from "./Main.module.css"
import Card from "./Card/Card"

const Main = () => {
  
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card/>

        </div>
      </div>
    </main>
  )
}
export default Main