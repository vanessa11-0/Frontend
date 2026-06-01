import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() productos: Producto[] = [];
  @Output() onEliminar = new EventEmitter<number>();

  trackById(index: number, item: Producto): number {
    return item.id;
  }

  retransmitirEliminar(id: number): void {
    this.onEliminar.emit(id);
  }
}