import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './pokemonCards.css';

const PokemonKards = (props) => {
    return(
    <ul  className="a-pokemons-cards" > 
        <h2 className='evolution' >Evolution Chain</h2>
        <li> <PokemonCard /></li>
        <li> <PokemonCard /></li>
    </ul >
)};

export default PokemonKards;