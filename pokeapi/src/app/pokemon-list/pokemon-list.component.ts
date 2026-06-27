import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'] 
})
export class PokemonListComponent implements OnInit {
pokemonList: Pokemon[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;
  
  limit: number = 20;
  offset: number = 0;
  currentPage: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.loading = true;
    this.errorMessage = null;

    this.pokemonService.getPokemonList(this.limit, this.offset)
      .pipe(
        catchError((error: unknown) => {
          this.errorMessage = 'No se pudieron recuperar los datos de la PokéAPI. Verifica tu conexión.';
          this.loading = false;
          return of([]);
        })
      )
      .subscribe({
        next: (data: Pokemon[]) => {
          this.pokemonList = data;
          this.loading = false;
        }
      });
  }

  nextPage(): void {
    this.offset += this.limit;
    this.currentPage++;
    this.loadPokemon();
  }

  prevPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.currentPage--;
      this.loadPokemon();
    }
  }

  playPokemonCry(audioUrl: string): void {
  if (!audioUrl) {
    console.warn('Este Pokémon no tiene audio disponible.');
    return;
  }

  console.log('Intentando reproducir:', audioUrl);

  const audio = new Audio(audioUrl);
  audio.volume = 1.0; 

  audio.play()
    .then(() => {
      console.log('¡Grito reproducido con éxito!');
    })
    .catch((error: unknown) => {
      console.error('Error directo del navegador:', error);
      alert('Por favor, haz un clic en cualquier parte de la página y vuelve a intentar presionar el botón.');
    });
}
}