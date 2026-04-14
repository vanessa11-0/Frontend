//Modela un tipo Pago que tenga una propiedad método , que puede ser "tarjeta", "efectivo" o "transferencia".
//Cada método requiere distintos campos:
//"tarjeta": número de tarjeta y CVV
//"transferencia": banco y número de cuenta
//"efectivo": no requiere datos adicionales
//Crea una función que reciba un pago y valide que se hayan ingresado los datos
//obligatorios dependiendo del método.

interface PagoTarjeta {
    metodo: "tarjeta";
    numeroTarjeta: string;
    cvv: number; 
}

interface PagoTransferencia {
    metodo: "transferencia";
    banco: string;
    numeroCuenta: string; 
}

interface PagoEfectivo {
    metodo: "efectivo";
}

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo; 

function validarPago(pago: Pago): boolean {
    switch (pago.metodo) {
        case "tarjeta":
            return pago.numeroTarjeta.length === 16 && pago.cvv.toString().length === 3;
        case "transferencia":
            return pago.banco !== "" && pago.numeroCuenta.length > 5;
        case "efectivo":
            return true; 
        default:
            return false;
    }
}

const miPago: Pago = { metodo: "tarjeta", numeroTarjeta: "1234567812345678", cvv: 123 };
console.log("¿Pago válido?:", validarPago(miPago)); 