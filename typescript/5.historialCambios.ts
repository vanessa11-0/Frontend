// Modela un historial de cambios de un usuario, donde cada cambio puede ser de nombre, correo o contraseña.
// Escribe una función que reciba una lista de estos cambios y devuelva un resumen con el número 
// de veces que se cambió cada uno.

type TipoCambio = "nombre" | "correo" | "contraseña";

interface RegistroCambio {
    campo: TipoCambio;
    valorAnterior: string;
    valorNuevo: string;
    fecha: Date; 
}

function resumirHistorial(historial: RegistroCambio[]) {
    const resumen = {
        nombre: 0,
        correo: 0,
        contraseña: 0
    };

    historial.forEach(cambio => {
        resumen[cambio.campo]++;
    });

    return resumen;
}

const historialUsuario: RegistroCambio[] = [
    { campo: "nombre", valorAnterior: "Vane", valorNuevo: "Vanessa", fecha: new Date() },
    { campo: "contraseña", valorAnterior: "123", valorNuevo: "abc", fecha: new Date() },
    { campo: "nombre", valorAnterior: "Vanessa", valorNuevo: "Vanessa T.", fecha: new Date() },
    { campo: "correo", valorAnterior: "vanes@test.com", valorNuevo: "vane@dev.com", fecha: new Date() },
    { campo: "contraseña", valorAnterior: "abc", valorNuevo: "secure456", fecha: new Date() }
];

const resultadoResumen = resumirHistorial(historialUsuario);
console.log("Resumen de cambios realizados:", resultadoResumen);