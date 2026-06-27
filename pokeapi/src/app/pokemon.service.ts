import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PokeAPIResponse, PokemonListItem, PokemonDetailResponse, Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<PokeAPIResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`).pipe(
      switchMap((response: PokeAPIResponse) => {
        const detailRequests: Observable<PokemonDetailResponse>[] = response.results.map((pokemon: PokemonListItem) => 
          this.http.get<PokemonDetailResponse>(pokemon.url)
        );
        return forkJoin(detailRequests);
      }),
      map((details: PokemonDetailResponse[]) => {
        return details.map((detail: PokemonDetailResponse) => {
          const hpStat = detail.stats.find(s => s.stat.name === 'hp')?.base_stat || 0;
          const attackStat = detail.stats.find(s => s.stat.name === 'attack')?.base_stat || 0;
          const defenseStat = detail.stats.find(s => s.stat.name === 'defense')?.base_stat || 0;

          return {
            id: detail.id,
            name: detail.name,
            image: detail.sprites.other?.['official-artwork']?.front_default || detail.sprites.front_default,
            types: detail.types.map(t => t.type.name),
            abilities: detail.abilities.map(a => a.ability.name),
            heldItems: detail.held_items.length > 0 
              ? detail.held_items.map(h => h.item.name.replace('-', ' ')) 
              : ['Ninguno'],
            stats: {
              hp: hpStat,
              attack: attackStat,
              defense: defenseStat
            }
          };
        });
      })
    );
  }
}