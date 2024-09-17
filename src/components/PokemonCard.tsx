import '../styles/pokemonCard.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { ListPokemon } from '../interfaces/pokemons.ts';

interface PokemonCardProps {
  pokemon: ListPokemon;
  isFavorite: boolean;
  onToggleFavorite?: () => void;
}

export default function PokemonCard({ pokemon, isFavorite, onToggleFavorite }: PokemonCardProps) {
  if (!pokemon) {
    return <div>Error: Pokémon data is missing.</div>;
  }

  return (
    <section className="pokemonCard">
      <div className="pokemonName">
        <h2 className="pokemonNameHeader">{pokemon.name}</h2>
      </div>
      <div className="icon">
        <img className="pokemonImage" src={pokemon.images} alt={pokemon.name} />
      </div>
      <button onClick={onToggleFavorite} className="button-icon">
        {!isFavorite && <FaRegStar size={30} />}
        {isFavorite && <FaStar size={30} color="yellow" />}
      </button>
      <div className="pokemonNumber">
        <h3>{pokemon.pokedexNumber}</h3>
      </div>
      <div className="types">
        <div className="leftType"></div>
        <div className="rightType"></div>
      </div>
    </section>
  );
}
