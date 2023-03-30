import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPokemonApi = () => {

    const [axiosPokemon, setAxiosPokemon] = useState([]);

    const ApiCall = useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log(response.data.results);
                setAxiosPokemon(response.data.results);
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div style={{ width: "250px", margin: "auto" }}>
            <h1>Fetch Pokemon</h1>
            <button onClick={ApiCall}>Fetch Pokemon</button>
            <ul>
                {
                    axiosPokemon.map((pokemonName, idx) => (
                        <li key={idx}>
                            {pokemonName.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default AxiosPokemonApi;

