import s from "./People.module.css"
import Person from "./Person/Person"
const People = (props) => {
  
  let dialogsElements = props.dialogsData
    .map(dialog => <Person name = {dialog.name} id = {dialog.id}/>)

  return (
    <div className={s.people}>
      {dialogsElements}
    </div>
  )
}

export default People 