import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

const CardCharacter  = () => {
    const {characterId} = useParams;
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/comics/${characterId}`);
                const character = response.data;
                console.log(character);

                setData(character);

                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [setData, characterId]);

    return isLoading ? (
        <div className="loading">
            <div>
                <strong>Page en cours de chargement...</strong>
            </div>
        </div>
    ) : (
        <div className="bg-white">
            <div className="perso">
                <div>
                    {/* <img
                        src={
                            data.thumbnail.path + "." + data.thumbnail.extension
                        }
                        alt=""
                    /> */}

                    {/* <h2>{data.name}</h2> */}
                </div>
                <div>
                    {/* {data.comics.map((comics, indexCardComics) => {
                        return (
                            <div key={indexCardComics}>
                                <h3>{comics.title}</h3>
                                <p>{comics.description}</p>
                                <img
                                    src={
                                        comics.thumbnail.path +
                                        "." +
                                        comics.thumbnail.extension
                                    }
                                    alt=""
                                />
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </div>
    );
}

export default CardCharacter ;