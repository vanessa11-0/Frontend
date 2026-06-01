import { Injectable } from '@angular/core';
import { Producto} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Lista de productos almacenada en memoria
  private productos: Producto[] = [];
  // Control de IDs correlativos
  private nextId: number = 1;

  constructor() {}

  // Obtener todos los productos
  getProductos(): Producto[] {
    return this.productos;
  }

  // Crear un nuevo producto
  crearProducto(nombre: string, precio: number): void {
    const nuevo: Producto = {
      id: this.nextId++,
      nombre: nombre,
      precio: precio
    };
    this.productos.push(nuevo);
  }

  // Eliminar un producto por ID
  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}