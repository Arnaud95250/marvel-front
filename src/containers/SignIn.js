import axios from 'axios';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            try{
                const reponse = await axios.post("https://marvel--back.herokuapp.com/signIn", { 
                    email: email, 
                    password: password
            });
            setUser(reponse.data.token);

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