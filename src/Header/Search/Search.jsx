import s from "./Search.module.css"

const Search = () => {
  return (
    <div className={s.search}>
      <input placeholder= "поиск" className={s.input} />
    </div>
  )

}

export default Search