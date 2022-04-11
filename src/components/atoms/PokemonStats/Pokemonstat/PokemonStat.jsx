import React from "react";


const PokemonStat = (props) => {
    const {name, value} = props;
    return(
        <div className="a-pokemon-stat">
            <span className="a-pokemon-stat__name" >{name}</span>
            <span className="a-pokemon-stat__value" >{value || 'ND' }</span>
        </div>
    );
};      

export default PokemonStat;