import s from "./Messages.module.css"
import People from "./People/People"
import TextMessages from "./TextMessages/TextMessages"
const Messages = (props) => {
  
  return (
    <div className={s.items}>
      <People dialogsData = {props.dialogsData}/>
      <TextMessages messagesData = {props.messagesData}/>
    </div>
  )
}

export default Messages