import React from "react";

import MyRoutes from "./Routes";

import "./styles/main.scss";
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <MyRoutes />
        <Footer/>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
