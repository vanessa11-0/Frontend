import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() producto!: Producto; 
  @Output() onEliminarCard = new EventEmitter<number>();

  eliminar(): void {
    this.onEliminarCard.emit(this.producto.id);
  }
}