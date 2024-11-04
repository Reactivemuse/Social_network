import s from "./TextMessages.module.css"
import TextItem from "./TextItem/TextItem"
const TextMessages  = () => {
  let messagesData = [
    { text: "Винни чемпион"},
    { text: "Привет" },
    { text: "Винни чемпион" },
    { text: "Нельзя писать state" },
    { text: "Исправь блок схему" },
  ]
  let textItem = messagesData
    .map( message => <TextItem text= {message.text} />)
  return (
    <div className={s.messages}>
      {textItem}
    </div>
  )
}

export default TextMessages