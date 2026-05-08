import { Component } from '@angular/core';

@Component({
  selector: 'app-selector-color',
  templateUrl: './selector-color.component.html',
  styleUrls: ['./selector-color.component.scss']
})
export class SelectorColorComponent {
  color: string = 'transparent';
  cambiarColor(nuevoColor: string): void {
    this.color = nuevoColor;
  }
}