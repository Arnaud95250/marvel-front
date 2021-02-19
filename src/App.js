//******************CSS**************************
import './App.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/characters.css';
import './assets/css/comics.css';
import './assets/css/home.css';
//******************package**********************
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
// import Cookies from "js-cookie";
//******************Components*******************
import Header from "./components/Header";
import Footer from "./components/Footer";
//******************Containers*******************
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";



function App() {
  return (
    <div className="body">
    <Router>
      <Header/>
      <Switch>
        <Route path="/comics/:characterId">
          <Comics />
        </Route>
        <Route path="/Characters">
          <Characters />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
