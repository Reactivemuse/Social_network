import s from "./PostStatistic.module.css"

const PostStatistic = () => {
  return (
    <div className={s.statistic__post}>
      <p className={s.likes}>Likes</p>
      <p className={s.comments}>Comments</p>
      <p className={s.views}>Views</p>
    </div>
  )
}

export default PostStatistic