import s from "./Main.module.css"
import Card from "./Card/Card"
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {Routes, Route} from "react-router-dom"
const Main = () => {
  
  return (
      <main className={s.main}>
        <div className={s.container}>
          <div className={s.content}>
            <Card/>
            <Routes>
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Messages" element={<Messages />} />
              <Route path="/News" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </main>
  )
}
export default Main