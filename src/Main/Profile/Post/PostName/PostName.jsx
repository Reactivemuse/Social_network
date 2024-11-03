import s from "./PostName.module.css"

const PostName = () => {

  return (
    <div className={s.name}>
      <img className={s.photo} src="https://sun9-66.userapi.com/s/v1/ig2/K48gcDI0m0-pVXAT__hS9RlI77p5o2mi8rjBfa-758w05tOyLC0vWM05zM_WyslmI84Bw_eESIJW1AZPQLplQF5O.jpg?quality=95&as=32x36,48x54,72x81,108x121,160x180,240x270,360x405,480x540,540x607,640x720,720x810,952x1071&from=bu&u=K4yL7SP7opELZ8e5FihD44HzkdbRBMeCfs1es_oYRvo&cs=952x1071" alt="" />
      <div className={s.name__item}>
        <p className={s.nam}>Maluckow Dmitrye</p>
        <p className={s.activity}>3 min ago</p>
      </div>
    </div>
  )
}

export default PostName