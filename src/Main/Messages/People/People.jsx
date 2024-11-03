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
  return (
    <div className={s.people}>
      <Person name = "IGOR" id = "1"/>
      <Person name="DIMA" id="2" />
      <Person name="ARTEM" id="3" />
      <Person name="KASHIRIN" id="4" />
      <Person name="ANTIPOV" id="5"/>
    </div>
  )
}

export default People 