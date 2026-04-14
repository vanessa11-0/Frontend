//Define una interfaz Producto que incluya id, nombre, cantidad y categoría("alimentos", "tecnología", "papelería").
//Crea una función que evalúe si un producto tiene bajo stock dependiendo de la categoría:
//alimentos: menos de 20 unidades
//tecnología: menos de 5 unidades
//papelería: menos de 50 unidades

interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnología" | "papelería";
}

function tieneBajoStock(producto: Producto): boolean {
    switch (producto.categoria) {
        case "alimentos":
            return producto.cantidad < 20;
        case "tecnología":
            return producto.cantidad < 5;
        case "papelería":
            return producto.cantidad < 50;
        default:
            return false;
    }
}

const inventario: Producto[] = [
    { id: 1, nombre: "Manzanas", cantidad: 15, categoria: "alimentos" },    
    { id: 2, nombre: "Mouse", cantidad: 10, categoria: "tecnología" },      
    { id: 3, nombre: "Cuadernos", cantidad: 30, categoria: "papelería" }   
];

inventario.forEach(p => {
    if (tieneBajoStock(p)) {
        console.log(`ALERTA: El producto ${p.nombre} tiene bajo stock.`);
    } else {
        console.log(`El producto ${p.nombre} está en niveles normales.`);
    }
});