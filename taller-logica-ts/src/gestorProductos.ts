class Producto {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public stock: number
    ) {}
}

class Inventario {
    private productos: Producto[] = [];

    agregar(producto: Producto): void {
        this.productos.push(producto);
        console.log(`Producto "${producto.nombre}" agregado.`);
    }

    buscarPorNombre(nombre: string): Producto | undefined {
        return this.productos.find(p => 
            p.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }

    listarProductos (): void {
        console.log("-- Lista de Productos --");
        this.productos.forEach(p => {
            console.log(`- ${p.nombre}: $${p.precio} (Stock: ${p.stock})`);
        });
    }

    calcularValorTotal(): number {
        return this.productos.reduce((total, p) => total + (p.precio * p.stock), 0);
    }
}

const miInventario = new Inventario();

miInventario.agregar(new Producto(1, "Laptop Gamer", 3500000, 5));
miInventario.agregar(new Producto(2, "Mouse Óptico", 85000, 15));
miInventario.agregar(new Producto(3, "Teclado Mecánico", 220000, 8));

miInventario.listarProductos();

const busqueda = miInventario.buscarPorNombre("laptop");

const valorTotal = miInventario.calcularValorTotal();
console.log(`Valor total del inventario: $${valorTotal}`);
