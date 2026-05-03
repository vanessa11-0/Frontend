import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  template: `<div class="display">{{ texto }}</div>`,
  styles: [`
    .display {
      background: #333;
      color: white;
      padding: 20px;
      text-align: right;
      font-size: 2rem;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  `]
})
export class PantallaComponent {
  @Input() texto: string = '0';
}