
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addpost, createtext } from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderElement = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addpost={addpost} createtext={createtext}/>
    </React.StrictMode>
  )
}