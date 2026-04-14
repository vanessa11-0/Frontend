//Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y la categoría.
//Crea una función que reciba un arreglo de transacciones y retorne un objeto que contenga la suma total
// agrupada por tipo.
//Ejemplo de salida esperada:
//{ ingreso: 350000, egreso: 180000 }

type Transaccion = {
monto: number
tipo: 'ingreso' | 'egreso'
categoria: string
}

function agruparTransacciones (transacciones: Transaccion[]) {
const resultado = { ingreso: 0, egreso: 0 } 

transacciones.forEach(t => {
if (t.tipo === 'ingreso') {
    resultado.ingreso += t.monto
    } else {
    resultado.egreso += t.monto
    }
});

return resultado
}

const misTransacciones: Transaccion[] = [
{ monto: 1000000, tipo: 'ingreso', categoria: 'salario' },
{ monto: 500000, tipo: 'egreso', categoria: 'alimentacion' },
{ monto: 280000, tipo: 'ingreso', categoria: 'transporte' },
{ monto: 700000, tipo: 'egreso', categoria: 'alquiler' }
];  

const resultado = agruparTransacciones(misTransacciones);
console.log(resultado);
