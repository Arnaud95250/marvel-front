import {Link, useHistory} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Join = ({setUser}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/join",{
          username: username,
          email: email,
          phone: phone,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers la home page
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

    return(
        <div className="formulaire">
            <h2>S'inscrire</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => {
                    setEmail(event.target.value)}} 
                    type="email" 
                    placeholder="Adresse email" 
                />

                <input onChange={(event) => {
                    setUsername(event.target.value)}} 
                    type="text" 
                    placeholder="Nom utilisateur" 
                />

                <input onChange={(event) => {
                    setPhone(event.target.value)}} 
                    type="text" 
                    placeholder="Numéro" 
                
                />

                <input onChange={(event) => {
                    setPassword(event.target.value)}}
                    type="password" 
                    placeholder="Mot de passe" 
                />
                <button type="submit">S'inscrire</button>
            </form>
            <div className="content_a">
                <Link to="/signin">Tu as déjà un compte ?Connecte-toi !</Link>
            </div>
        </div>
    )
   }
   
   export default Join;