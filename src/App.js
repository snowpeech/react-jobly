import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./Navbar"
import Routes from "./Routes"
import './styles/App.css';

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes />
    </div>
  </BrowserRouter>
  );
}

export default App;
