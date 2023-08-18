import { useEffect, useState } from 'react';
import { getPokemon, getPokemonsData } from '../../api/pokeApi.js';
import Card from '../../components/Card/index.js';
import { PokemonSearchResponse } from '../../interfaces/pokemon.js';
import { Pokedex } from './styles.js';

const App = () => {
  const [pokemonList, setPokemonList] = useState<PokemonSearchResponse[]>([]);

  const getAllPokemon = async () => {
    try {
      const { data: allPokemon } = await getPokemon();
      const results = await Promise.all(
        allPokemon.results.map(async pokemon => {
          const { data: pokemonData } = await getPokemonsData(pokemon.url);
          return pokemonData;
        })
      );
      setPokemonList(results);
      console.log(pokemonList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);

  return (
    <Pokedex>
      {!!pokemonList &&
        pokemonList.map(pokemon => <Card pokemonInfo={pokemon} />)}
    </Pokedex>
  );
};

export default App;
