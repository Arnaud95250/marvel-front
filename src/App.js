//******************SCSS**************************
import "./App.scss";
import "./assets/scss/components/header.scss";
import "./assets/scss/components/footer.scss";
import "./assets/scss/components/form.scss";
import "./assets/scss/containers/characters.scss";
import "./assets/scss/containers/carsCharacters.scss";
import "./assets/scss/containers/comics.scss";
import "./assets/scss/containers/cardComics.scss";
import "./assets/scss/containers/home.scss";
//******************package**********************
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
//******************Components*******************
import Header from "./components/Header";
import Footer from "./components/Footer";
//******************Containers*******************
import Home from "./containers/Home";
import Join from "./containers/Join";
import SignIn from "./containers/SignIn";
import Characters from "./containers/Characters";
import CardCharacter from "./containers/CardCharacter ";
import CardComics from "./containers/CardComics";
import Comics from "./containers/Comics";
// https://marvel--back.herokuapp.com

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken" || null));
  const [data, setData] = useState([]);

  const setUser = (token) => {
    // fonction qui pemet de récuper et stocker le token dans un cookie (envoyé en paramettre aux enfant dans les route login et signUp)
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
        <Header />
        <Switch>
          <Route path="/join">
            <Join setUser={setUser} />
          </Route>
          <Route path="/signin">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/Characters">
            <Characters />
          </Route>
          <Route path="/cardcomics/:comicsId">
            <CardComics />
          </Route>
          <Route path="/cardcharacters/:characterId">
            <CardCharacter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
