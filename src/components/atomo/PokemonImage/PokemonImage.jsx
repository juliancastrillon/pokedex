import React from "react";
import './PokemonImage.css';

const PokemonImage = (props) =>  (
    <picture className="a-pokemon-image-container" >
        <img className="a-pokemon-image-container__img" src={props.image} alt= { `imagen de ${props.name}` } ></img>
    </picture >
    );

export default PokemonImage;