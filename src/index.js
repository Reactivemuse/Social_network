
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addpost, createtext, subscribe } from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderElement = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addpost={addpost} createtext={createtext} />
    </React.StrictMode>
  )
}

renderElement(state)

subscribe(renderElement)



