import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
let messagesData = [
  { text: "Винни чемпион" },
  { text: "Привет" },
  { text: "Винни чемпион" },
  { text: "Нельзя писать state" },
  { text: "Исправь блок схему" },
]
let dialogsData = [
  { id: 1, name: "IGOR" },
  { id: 2, name: "DIMA" },
  { id: 3, name: "ARTEM" },
  { id: 4, name: "KASHIRIN" },
  { id: 5, name: "ANTIPOV" },
]
root.render(
  <React.StrictMode>
    <App messagesData = {messagesData} dialogsData = {dialogsData}/>
  </React.StrictMode>
)


