import React from 'react';
import { useState, useEffect } from 'react';

const PokemonForm = (props) => {

    const [pokemon, setPokemon] = useState([])

    function apiCall() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                return response.json();
            }).then(response => {
                setPokemon(response.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div style={{ width: "250px", margin: "auto" }}>
            <h1>Pokemon Names</h1>
            <button onClick={apiCall}>Fetech Pokemons</button>
            <ul>
                {
                    pokemon.map((pokemonNames, idx) => (
                        <li key={idx}>{pokemonNames.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PokemonForm;
