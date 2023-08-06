import axios, { AxiosResponse } from 'axios';
import {
  PokemonGetResponse,
  PokemonSearchResponse
} from '../interfaces/pokemon.js';

export const searchPokemon = (
  pokemon: string
): Promise<AxiosResponse<PokemonSearchResponse>> =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

export const getPokemon = (
  limit: number = 150,
  offset: number = 0
): Promise<AxiosResponse<PokemonGetResponse>> =>
  axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

export const getPokemonsData = (
  url: string
): Promise<AxiosResponse<PokemonSearchResponse>> => axios.get(url);
