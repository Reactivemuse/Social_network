import s from "./Post.module.css"
import PostName from "./PostName/PostName"
import PostInfo from "./PostInfo/PostInfo"
import PostStatistic from "./PostStatistic/PostStatistic"

const Post = (props) => {

  return(
    <div className={s.item}>
      <PostName/>
      <PostInfo title = {props.title} text = {props.text}/>
      <PostStatistic likes={props.likes} />
    </div>
  )
}

export default Post