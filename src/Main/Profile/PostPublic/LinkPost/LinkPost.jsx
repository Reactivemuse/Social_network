import s from "./LinkPost.module.css"

const LinkPost = () =>{

  return (
    <div className={s.links}>
      <a href="" className={s.postphoto}>Post a photo</a>
      <a href="" className={s.postjob}>Post a Job</a>
    </div>
  )
}

export default LinkPost