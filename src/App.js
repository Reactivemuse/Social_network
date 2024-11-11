import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App(props) {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Main statemes={props.state.messagesPage} store = {props.store}/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
