import { Component, signal } from '@angular/core';

type LoadingState = 'Pendiente' | 'Cargando' | 'Exito';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  estado = signal<LoadingState>('Pendiente');
  elementos = signal<string[]>([]);

  toggleData() {
    if (this.estado() === 'Exito') {
      this.elementos.set([]);
      this.estado.set('Pendiente');
    } else {
      this.estado.set('Cargando');
      
      setTimeout(() => {
        this.elementos.set(['Elemento A', 'Elemento B', 'Elemento C']);
        this.estado.set('Exito');
      }, 2000); 
    }
  }
}