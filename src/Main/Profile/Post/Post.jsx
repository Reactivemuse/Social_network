import s from "./Post.module.css"
import PostName from "./PostName/PostName"
import PostInfo from "./PostInfo/PostInfo"
import PostStatistic from "./PostStatistic/PostStatistic"

const Post = () => {

  return(
    <div className={s.item}>
      <PostName/>
      <PostInfo/>
      <PostStatistic/>
    </div>
  )
}

export default Post