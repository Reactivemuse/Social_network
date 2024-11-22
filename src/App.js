import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Main from "./Main/Main";
import HeaderContainer from './Header/HeaderContainer';

function App(props) {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <HeaderContainer />
        <Main store = {props.store}/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
