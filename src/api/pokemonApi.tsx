
export const fetchPokemon = async (name: string) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const pokemon = await response.json().then((data) => {
    return {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
    };
  });

    return pokemon;

  ;
};


export default fetchPokemon;