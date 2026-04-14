//Crea una interfaz CampoFormulario con las propiedades: nombre, tipo ("texto", "numero", "email") 
// y valor (que puede ser string o number). Desarrolla una función que valide una lista de campos y 
// devuelva los nombres de los campos inválidos según su tipo.

interface CampoFormulario {
    nombre: string;
    tipo: "texto" | "numero" | "email";
    valor: string | number; 
}

function validarCampos(campos: CampoFormulario[]): string[] {
    const invalidos: string[] = []; 

    for (const campo of campos) {
        switch (campo.tipo) {
            case "texto":
                if (typeof campo.valor !== "string") {
                    invalidos.push(campo.nombre);
                }
                break;
            case "numero":
                if (typeof campo.valor !== "number") {
                    invalidos.push(campo.nombre);
                }
                break;
            case "email":
                if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
                    invalidos.push(campo.nombre);
                }
                break;
        }
    }

    return invalidos;
}

const misCampos: CampoFormulario[] = [
    { nombre: "Usuario", tipo: "texto", valor: "Vanessa" },
    { nombre: "Edad", tipo: "numero", valor: "veinte" }, 
    { nombre: "Correo", tipo: "email", valor: "correo-sin-arroba" }, 
    { nombre: "Puntos", tipo: "numero", valor: 100 }
];

const camposConError = validarCampos(misCampos);
console.log("Campos inválidos detectados:", camposConError); 
