import React from "react";
import PokemonStat from "./Pokemonstat/PokemonStat";
import './PokemonStats.css';

const PokemonStats = (props) => (
    <div className="a-pokemon-stats" >
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />        
        <PokemonStat />
        <PokemonStat />
        <PokemonStat />   
    </div>
)     

export default PokemonStats;