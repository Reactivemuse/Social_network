import s from "./People.module.css"
import Person from "./Person/Person"
const People = () => {
  let dialogsData = [
    { id: 1, name: "IGOR" },
    { id: 2, name: "DIMA" },
    { id: 3, name: "ARTEM" },
    { id: 4, name: "KASHIRIN" },
    { id: 5, name: "ANTIPOV" },
  ]

  let dialogsElements = dialogsData
    .map(dialog => <Person name = {dialog.name} id = {dialog.id}/>)

  return (
    <div className={s.people}>
      {dialogsElements}
    </div>
  )
}

export default People 