import s from "./Icon.module.css"

const Icon = (props) => {
  return (
    <div className={s.item}>
      <a href="#" className={s.item__link}>{props.text}</a>
    </div>
  )
}

export default Icon