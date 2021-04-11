import React from 'react';
import './App.css';
import './css/main.css';
import Nav from './components/Nav';
import Router from './Router';
import Ftr from './components/Ftr';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <Ftr />
    </BrowserRouter>
  );
}

export default App;
