
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderElement = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addpost={store.addpost.bind(store)} createtext={store.createtext.bind(store)} createtitle={store.createtitle.bind(store)}/>
    </React.StrictMode>
  )
}

renderElement(store.getState())

store.subscribe(renderElement)



