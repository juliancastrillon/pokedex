import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/default-layout/DefaultLayout";
import { fetchPokemon } from "../../../assets/js/pokeapi-handler";
import { useParams } from "react-router-dom";
import PokemonView from "../../Molecules/pokemon-view/PokemonView";
import loading from '../../../../src/assets/img/loading.gif';

const PokemonDetails = () => {
  const { name: PokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () =>
    setPokemonData(await fetchPokemon(PokemonName));
    fetchData();
  }, [PokemonName]);
  return (
    <DefaultLayout title="Detalle">
      {pokemonData ? (
        <>
          <PokemonView  pokemon={pokemonData.pokemon} />
        </>
      ) : (
        <img src={loading} alt="Cargando pokemon..."></img>
      )}
    </DefaultLayout>
  );
};

export default PokemonDetails;
