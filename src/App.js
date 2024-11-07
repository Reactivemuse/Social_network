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
          addpost={props.addpost} createtitle = {props.createtitle} createtext={props.createtext}/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
