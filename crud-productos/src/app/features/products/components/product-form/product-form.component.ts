import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  nombre: string = '';
  precio: number | null = null; 

  @Output() onProductoCreado = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  esFormularioValido(): boolean {
    if (!this.nombre || this.nombre.trim() === '') {
      return false;
    }
    if (this.precio === null || this.precio <= 0) {
      return false;
    }
    return true;
  }

  registrar(): void {
    if (this.esFormularioValido() && this.precio !== null) {
      this.productService.crearProducto(this.nombre, this.precio);
      this.limpiarFormulario();
      this.onProductoCreado.emit();
    }
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.precio = null;
  }
}