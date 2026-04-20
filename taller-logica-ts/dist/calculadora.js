"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    sumar(a, b) { return a + b; }
    restar(a, b) { return a - b; }
    multiplicar(a, b) { return a * b; }
    dividir(a, b) {
        if (b === 0)
            return "Error: No se puede dividir entre cero";
        return a / b;
    }
    calcular(operacion, a, b) {
        switch (operacion.toLowerCase()) {
            case "sumar": return this.sumar(a, b);
            case "restar": return this.restar(a, b);
            case "multiplicar": return this.multiplicar(a, b);
            case "dividir": return this.dividir(a, b);
            default: return "Operación no válida";
        }
    }
}
const miCalc = new Calculadora();
console.log(miCalc.calcular("sumar", 10, 5));
console.log(miCalc.calcular("restar", 10, 5));
console.log(miCalc.calcular("multiplicar", 10, 5));
console.log(miCalc.calcular("dividir", 10, 5));
console.log(miCalc.calcular("dividir", 10, 0));
//# sourceMappingURL=calculadora.js.map