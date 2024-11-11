
import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderElement = (state) => {
  root.render(
    <React.StrictMode>
      <App store = {store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  )
}

renderElement(store.getState())

//store.subscribe(renderElement)
/// работает для обычного store тоже
store.subscribe( () => {
  let state = store.getState()
  renderElement(state)
})



