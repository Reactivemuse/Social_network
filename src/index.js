
import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


//renderElement()

//store.subscribe(renderElement)
/// работает для обычного store тоже


//store.subscribe( () => {
//  renderElement()
//})



