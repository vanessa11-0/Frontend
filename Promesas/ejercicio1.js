console.log("Ejercicio 1 ...");
function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre === "Vanessa") {
                resolve(`Hola ${nombre}, bienvenida.`);
            } else {
                reject("No te conozco.");
            }
        }, 2000);
    });
}

saludar("Vanessa")
    .then((mensaje) => {
        console.log("La promesa se resolvió: " + mensaje);
    })
    .catch((error) => {
        console.error(error);
    });