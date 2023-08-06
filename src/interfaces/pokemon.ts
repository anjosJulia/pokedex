export interface PokemonSprites {
  front_default: string;
  versions: {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string;
        };
      };
    };
  };
}

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSearchResponse {
  name: string;
  weight: number;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  types: PokemonTypes[];
  stats: PokemonStats[];
}

export interface PokemonGetResponse {
  next: string;
  previous: string;
  results: PokemonForm[];
}
