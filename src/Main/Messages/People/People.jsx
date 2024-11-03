import s from "./People.module.css"
import Person from "./Person/Person"
const People = () => {
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