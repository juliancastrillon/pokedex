export const fetchPokemon = async (pokemonName) => {
  try {
    let apiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    let pokemonData = await apiResponse.json();
    return {
      name: pokemonData.name,
      image: pokemonData.sprites.other.dream_world.front_default,
      titleimage: pokemonData.sprites.front_default,
      //stats: [
        //{ name: 'id',value: pokemonData.id}
      //],
    };
  } catch (error) {
    return null;
  }
};
