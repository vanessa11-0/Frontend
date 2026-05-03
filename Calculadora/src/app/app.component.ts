import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  numeroActual: string = '';
  primerNumero: number = 0;
  operador: string = '';
  resultado: string = '0';

  presionarNumero(num: string) {
    this.numeroActual += num;
    this.resultado = this.numeroActual;
  }

  presionarOperacion(op: string) {
    this.primerNumero = parseFloat(this.numeroActual);
    this.operador = op;
    this.numeroActual = '';
  }

  calcular() {
    const segundoNumero = parseFloat(this.numeroActual);
    if (this.operador === '+') this.resultado = (this.primerNumero + segundoNumero).toString();
    if (this.operador === '-') this.resultado = (this.primerNumero - segundoNumero).toString();
    if (this.operador === '*') this.resultado = (this.primerNumero * segundoNumero).toString();
    if (this.operador === '/') this.resultado = (this.primerNumero / segundoNumero).toString();
    this.numeroActual = this.resultado;
  }

  limpiar() {
    this.numeroActual = '';
    this.primerNumero = 0;
    this.operador = '';
    this.resultado = '0';
  }
}