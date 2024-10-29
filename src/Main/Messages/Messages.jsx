import s from "./Messages.module.css"

const Messages = () => {
  return (
    <div className={s.items}>
      <div className={s.people}>
        <div className={s.people__item + ' ' + s.active}>IGOR</div>
        <div className={s.people__item}>DIMA</div>
        <div className={s.people__item}>ARTEM</div>
        <div className={s.people__item}>Kashirin</div>
        <div className={s.people__item}>Antipov</div>
      </div>
      <div className={s.messages}>
        <div className={s.messages__item}>Винни чемпион</div>
        <div className={s.messages__item}>Привет</div>
        <div className={s.messages__item}>Винни чемпион</div>
        <div className={s.messages__item}>Нельзя писать state</div>
        <div className={s.messages__item}>Исправь блок схему</div>
      </div>
    </div>
  )
}

export default Messages