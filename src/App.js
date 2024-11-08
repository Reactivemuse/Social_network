import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App(props) {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Main statemes={props.state.messagesPage} stateprof={props.state.profilePage} 
          dispatch={props.dispatch}/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
