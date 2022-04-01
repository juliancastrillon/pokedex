import React from "react";
import PokemonImage from "../../atomo/PokemonImage/PokemonImage";
import PokemonStats from "../../atomo/PokemonStats/PokemonStats";
import PokemonTitle from "../../atomo/pokemonTitle/PokemonTitle";
import PokemonCards from "../../atomo/RelatedPokemons/PokemonCards/PokemonCards";

const PokemonView = (props) => {

return(
    <>
    <PokemonTitle  image={props.image} name={props.name} />
    <PokemonImage name={props.name} image={props.image}/>
    <PokemonStats />
    <PokemonCards />
    </>
)};

export default PokemonView;