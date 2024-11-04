import s from "./PostInfo.module.css"

const PostInfo = (props) => {

  return (
    <div className={s.info}>
      <p className={s.title}>{props.title}</p>
      <p className={s.text}>{props.text}</p>
    </div>
  )
}

export default PostInfo