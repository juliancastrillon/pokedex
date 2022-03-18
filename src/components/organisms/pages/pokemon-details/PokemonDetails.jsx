import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../layouts/default-layout/DefaultLayout";
import { fetchPokemon } from "../../../../assets/js/pokeapi-handler";
import { useParams } from "react-router-dom";
import PokemonView from "../../../Molecules/nav-items/pokemon-view/PokemonView";

const PokemonDetails = () => {
const { name: PokemonName } = useParams();
const [pokemonData, setPokemondata ] = useState(null);
    useEffect(async() => {
        setPokemondata(await fetchPokemon(PokemonName));
});

return(
    <DefaultLayout title='Drtalle'>
        {pokemonData ? ( <PokemonView name={pokemonData.name} image={pokemonData.image} /> ) : ( <span>Pokemon no disponible</span> )}
    </DefaultLayout>
    
    );
};

export default PokemonDetails;