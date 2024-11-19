import s from "./Users.module.css"
import User from "./User/User"
import React from "react"

let Users = (props) => {

  let UserItem = props.users
    .map(user => <User url={user.photos.small} id={user.id} followed={user.followed} name={user.name}
      description={user.status}
      addUnfollow={props.addUnfollow} addFollow={props.addFollow} />)
      
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return(
    <div className={s.container}>
      <div className={s.pages}>
        {pages.map( data => {
          return (
            <span className={props.currentPage === data ? 
              s.selectedPage : s.page} onClick={(e) => { props.onPageChanged(data)}}>
                {data}
            </span>
          )
        })}
      </div>
      {UserItem}
    </div>
  )
}


export default Users