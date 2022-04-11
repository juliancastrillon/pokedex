import React from "react";
import './PokemonImage.css';

const PokemonImage = (props) =>  {
    const {image} = props
    return(
        <picture className="a-pokemon-image-container" >
            <img className="a-pokemon-image-container__img" src={image} alt= 'imagen del pokemon' ></img>
        </picture >
        );
    };
export default PokemonImage;