//Diseña una función que permita convertir entre distintas unidades de medida: "cm", "m" y "km".
//Usa un tipo unión para representar las unidades posibles y asegúrate de validar
//correctamente los valores de entrada y salida.

type Unidad = "cm" | "m" | "km"; 

function convertirUnidades(valor: number, de: Unidad, a: Unidad): number {
    let valorEnMetros: number;

    switch (de) {
        case "cm": valorEnMetros = valor / 100; break;
        case "m":  valorEnMetros = valor; break;
        case "km": valorEnMetros = valor * 1000; break;
        default: return 0;
    }
    switch (a) {
        case "cm": return valorEnMetros * 100;
        case "m":  return valorEnMetros;
        case "km": return valorEnMetros / 1000;
        default: return 0;
    }
}
console.log(`5km son: ${convertirUnidades(5, "km", "m")} metros`);