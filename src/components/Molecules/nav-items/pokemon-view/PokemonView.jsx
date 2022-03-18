import React from "react";

const PokemonView = (props) => (
    <article>
        <h2>{props.name}</h2>
        <img src={props.image} alt= { `imagen de ${props.name}` } ></img>
    </article>

);

export default PokemonView;