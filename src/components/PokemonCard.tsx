import "../styles/pokemoncard.css"
import fetchPokemon from '../api/pokemonApi.tsx';



const PokemonCard = () => {

  const pikachu = fetchPokemon('pikachu');
  pikachu.then((data) => {
    console.log(data);
  } )

    return (
        <div>
            <h1>{pikachu.then()} </h1>
        </div>
);
}

export default PokemonCard;