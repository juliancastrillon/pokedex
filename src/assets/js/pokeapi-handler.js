export const fetchPokemon = async (pokemonName) => {
  try {
    let apiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    let pokemonData = await apiResponse.json();
    console.log(pokemonData)
    return {
      pokemon: { 
        type: pokemonData.types[0].type.name || 'undefined',
        name: pokemonData.name,
        image: pokemonData.sprites.other.dream_world.front_default,
        stats: {
          no: pokemonData.id,
          level: pokemonData.base_experience,
          type: pokemonData.types[0].type.name.toUpperCase(),
          haibilty: pokemonData.abilities[0].ability.name.toUpperCase(),
          height: pokemonData.height,
          weight: `${pokemonData.weight} Kg`,
        }
      },
      chain: []  
    }
  } catch (error) {
    return null;
  }
};
