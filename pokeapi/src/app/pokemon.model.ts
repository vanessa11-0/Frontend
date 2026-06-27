export interface PokeAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      }
    }
  };
  types: Array<{ slot: number; type: { name: string; url: string; } }>;
  abilities: Array<{ ability: { name: string; url: string; }; is_hidden: boolean; slot: number; }>;
  held_items: Array<{
    item: { name: string; url: string; };
    version_details: Array<{ rarity: number; version: { name: string; url: string; }; }>
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string; }
  }>;
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
  heldItems: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
}