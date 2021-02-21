import axios from 'axios';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = ({setUser}) => {
    const [email, setEmail] = useState(""); // variable qui stock ma value email de mon input
    const [password, setPassword] = useState(""); // variable qui stock ma value password de mon input

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();// Permets de garder le formulaire rempli s'il y a une erreur
        const fetchData = async () => {
            try{
                const reponse = await axios.post("http://localhost:3000/signIn", { // chemin vers mon API ou je fais fais une methode POST pour identification d'un membre
                    email: email, // je recupère la value qi se trouve dans mon input email et j'envoie les données en POST
                    password: password
            });
            setUser(reponse.data.token);// je récupère le token du membre dans les paramettre de la fonction setUser(les paramettre son retrensmit dans le parent et stocké dans un cookie)

            history.push("/"); 
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
    }


    return( 
        <div className="formulaire">
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit}>

                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email" 
                    placeholder="Adresse email"
                />

                <input 
                    onChange={(event) => setPassword(event.target.value)}
                    type="password" 
                    placeholder="Mot de passe" 
                />

                <button type="submit">Se connecter</button>
            </form>
            <div className="content_a">
                <Link to="/join">Pas encore de compte ? Inscrits-toi!</Link>
            </div>
        </div>
    )
}

export default SignIn;