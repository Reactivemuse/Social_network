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
  return (
    <div className={s.messages}>
      <TextItem text= "Винни чемпион"/>
      <TextItem text = "Привет"/>
      <TextItem text = "Винни чемпион"/>
      <TextItem text = "Нельзя писать state"/>
      <TextItem text= "Исправь блок схему"/>
    </div>
  )
}

export default TextMessages