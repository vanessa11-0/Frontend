
function obtenerEdad(edad){
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Número: 17");
        resolve(17);
    }, 2000);
});
}

function verificarMayorDeEdad(edad) {
    return new Promise((resolve, reject) => {
            if (edad >= 18){
                resolve("Eres mayor de edad.");
            } else (edad < 18); {
                reject("Eres menor de edad.");
            }
});
}

obtenerEdad()
    .then((edad) => {
        return verificarMayorDeEdad(edad);
    })
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });