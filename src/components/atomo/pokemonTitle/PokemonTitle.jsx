import React from "react";
import './PokemonTitle.css';

const PokemonTitle = (props) => {
    return(
    <div className="a-pokemon-title"  > 
        <picture>
            <img className="title-image" src={props.image} alt={props.name}></img>
        </picture>
        <h1 >{props.name}</h1>
    </div>
)};

export default PokemonTitle;