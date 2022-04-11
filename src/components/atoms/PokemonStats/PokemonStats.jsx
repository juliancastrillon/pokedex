import React from "react";
import PokemonStat from "./Pokemonstat/PokemonStat";
import './PokemonStats.css';

const PokemonStats = (props) => { 
    const {stats} = props;
    return(
        <div className="a-pokemon-stats" >
            <PokemonStat name='No.' value={stats.no} />
            <PokemonStat name='LEVEL' value={stats.level} />
            <PokemonStat name='TYPE' value={stats.type} />
            <PokemonStat name='HABILITY' value={stats.hability} />
            <PokemonStat name='HEIGTH' value={stats.height} />
            <PokemonStat name='WEIGHT' value={stats.weight} />
        </div>
    );     
};
export default PokemonStats;