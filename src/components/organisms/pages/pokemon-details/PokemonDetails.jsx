import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../layouts/default-layout/DefaultLayout";
import { fetchPokemon } from "../../../../assets/js/pokeapi-handler";
import { useParams } from "react-router-dom";
import PokemonView from "../../../Molecules/nav-items/pokemon-view/PokemonView";
import loading from "../../../../assets/img/loading.gif";

const PokemonDetails = () => {
const { name: PokemonName } = useParams();
const [pokemonData, setPokemonData ] = useState(null);
    useEffect(() => {
    const fetchData = async () => 
        setPokemonData(await fetchPokemon(PokemonName));
        fetchData();
}, [PokemonName]);

return(
    <DefaultLayout title='Detalle'>
        <div>
        
            {pokemonData ? ( <PokemonView name={pokemonData.name} image={pokemonData.image} /> 
            ) : ( 
            <img src={loading} alt='Cargando pokemon'></img> 
            )}
        </div>    
    </DefaultLayout>
    
    );
};

export default PokemonDetails;