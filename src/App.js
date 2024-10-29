import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
