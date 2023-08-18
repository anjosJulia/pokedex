import { PokemonSearchResponse } from '../../interfaces/pokemon.js';
import { CardWrapper } from './styles.js';

interface CardProp {
  pokemonInfo: PokemonSearchResponse;
}
const Card = ({ pokemonInfo }: CardProp) => {
  return (
    <CardWrapper>
      <h1>{pokemonInfo.name}</h1>
      <img
        src={
          pokemonInfo.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
        alt=''
      />
    </CardWrapper>
  );
};

export default Card;
