import React from "react";
import PokemonImage from "../../atoms/PokemonImage/PokemonImage";
import PokemonStats from "../../atoms/PokemonStats/PokemonStats";
import PokemonTitle from "../../atoms/pokemonTitle/PokemonTitle";
import PokemonCards from "../../atoms/RelatedPokemons/PokemonCards/PokemonCards";


const PokemonView = (props) => {
const {pokemon} = props;
return(
    <>
    <PokemonTitle  name={pokemon.name} type={pokemon.type} image={pokemon.image} />
    <PokemonImage  image={pokemon.image}/>
    <PokemonStats stats={pokemon.stats} />
    <PokemonCards />
    </>
)};

export default PokemonView;