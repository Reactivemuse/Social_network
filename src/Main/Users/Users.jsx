import s from "./Users.module.css"
import User from "./User/User"

const Users = (props) => {
  if (props.users.length === 0){
    props.setUsers([
      {
        id: 1, url: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41fee39916-12715029-images-thumbs&n=13',
        followed: true, name: 'Dmitrye K', description: 'I am looking job right now', place: { country: 'Belarus', city: 'Minsk' }
      },
      {
        id: 2, url: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41fee39916-12715029-images-thumbs&n=13',
        followed: false, name: 'Dmitrye P', description: 'I am looking job right now', place: { country: 'Belarus', city: 'Minsk' }
      },
      {
        id: 3, url: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41fee39916-12715029-images-thumbs&n=13',
        followed: true, name: 'Sasha', description: 'I am looking job right now', place: { country: 'Belarus', city: 'Minsk' }
      }])
  }

  let UserItem = props.users
    .map(user => <User url = {user.url} id={user.id} followed={user.followed} name={user.name} 
      description={user.description} country={user.place.country} city={user.place.city}
      addUnfollow={props.addUnfollow} addFollow={props.addFollow}/>)

  return (
    <div className={s.container}>
      {UserItem}
    </div>
  )
}

export default Users