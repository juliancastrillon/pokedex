import React from "react";
import './PokemonTitle.css';

const PokemonTitle = (props) => {
    const {name , image } = props;
    return(    
    <div className="a-pokemon-title"  > 
        <picture>
            <img className="title-image" src={image} alt='imagen de pokemon'></img>
        </picture>
        <h1 >{name}</h1>
    </div>
)};

export default PokemonTitle;