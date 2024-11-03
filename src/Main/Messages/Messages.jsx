import s from "./Messages.module.css"
import People from "./People/People"
import TextMessages from "./TextMessages/TextMessages"
const Messages = () => {
  return (
    <div className={s.items}>
      <People/>
      <TextMessages/>
    </div>
  )
}

export default Messages