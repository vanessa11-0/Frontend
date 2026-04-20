class Calculadora {
    sumar(a: number, b: number): number { return a + b; }
    restar(a: number, b: number): number { return a - b; }
    multiplicar(a: number, b: number): number { return a * b; }
    
    dividir(a: number, b: number): number | string {
        if (b === 0) return "Error: No se puede dividir entre cero";
        return a / b;
    }

    calcular(operacion: string, a: number, b: number): number | string {
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

