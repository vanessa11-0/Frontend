import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html'
})
export class BotonesComponent {
  @Output() clickNumero = new EventEmitter<string>();
  @Output() clickOperacion = new EventEmitter<string>();
  @Output() clickResultado = new EventEmitter<void>();
  @Output() clickLimpiar = new EventEmitter<void>();

  enviarNumero(n: string) { this.clickNumero.emit(n); }
  enviarOp(op: string) { this.clickOperacion.emit(op); }
}