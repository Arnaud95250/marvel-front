//******************CSS**************************
import './App.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/form.css';
import './assets/css/characters.css';
import './assets/css/comics.css';
import './assets/css/home.css';
//******************package**********************
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Cookies from "js-cookie";
//******************Components*******************
import Header from "./components/Header";
import Footer from "./components/Footer";
//******************Containers*******************
import Home from "./containers/Home";
import Join from "./containers/Join";
import SignIn from "./containers/SignIn";
import Characters from "./containers/Characters";
import CardCharacter  from "./containers/CardCharacter ";
import Comics from "./containers/Comics";



function App() {
    const [userToken, setUserToken] = useState(Cookies.get("userToken" || null));
    const [data, setData] = useState([]);

    // const setInfoData = (data) => {
    //   setData(data);
    // }

    const setUser = (token) => { // fonction qui pemet de récuper et stocker le token dans un cookie (envoyé en paramettre aux enfant dans les route login et signUp)
      if (token) {
        Cookies.set("userToken", token, { expires: 7 }); // création du cookie Cookies.set("nom_du_cookie", paramettre que je stock, { la date ou le cookie doit disparaitre: 7 }); 
        setUserToken(token); // met à jour le userToken
      } else {
        Cookies.remove("userToken"); // si 
        setUserToken(null);
      }
    };




  return (
    <div className="body">
    <Router>
      <Header/>
      <Switch>
        <Route path="/join">
          <Join setUser={setUser} />
        </Route>
        <Route path="/signin">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/Characters">
          <Characters/>
        </Route>
        <Route path="/cardcharacters/:characterId">
          <CardCharacter />
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
