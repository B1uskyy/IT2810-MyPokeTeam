
export const fetchPokemon = async (name: string) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const pokemonJson = await response.json();

  return pokemonJson

}


export default fetchPokemon;