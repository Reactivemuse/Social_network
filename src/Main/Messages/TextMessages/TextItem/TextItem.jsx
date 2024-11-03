import s from "./TextItem.module.css"

const TextItem = (props) => {
  return (
    <div className={s.messages__item}>{props.text}</div>
  )
}

export default TextItem