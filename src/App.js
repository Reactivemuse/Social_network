import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App(props) {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Main dialogsData={props.dialogsData} messagesData={props.messagesData} postData={props.postData} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
