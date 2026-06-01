import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Producto } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'] 
})
export class ProductPageComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.actualizarLista();
  }

  actualizarLista(): void {
    this.listaProductos = this.productService.getProductos();
  }

  manejarEliminar(id: number): void {
    this.productService.eliminarProducto(id);
    this.actualizarLista();
  }

  manejarProductoCreado(): void {
    this.actualizarLista();
  }
}