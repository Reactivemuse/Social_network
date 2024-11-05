import s from "./TextMessages.module.css"
import TextItem from "./TextItem/TextItem"
const TextMessages  = (props) => {
  
  let textItem = props.messagesData
    .map( message => <TextItem text= {message.text} />)
  return (
    <div className={s.messages}>
      {textItem}
    </div>
  )
}

export default TextMessages