console.log("Ejercicio 2 ...");

function obtenerNumero(){
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Número: 10");
        resolve(10);
    }, 2000);
});
}

function multiplicarPorDos(numero) {
    return new Promise((resolve) => {
    setTimeout(() => {
        const resultado = numero * 2;
        console.log("Número multiplicado por 2: " + resultado);
        resolve(resultado);
    }, 2000);
});
}

obtenerNumero()
    .then((numero) => {
        return multiplicarPorDos(numero);  
    })
    .then((resultado) => {
        console.log("Resultado: " + resultado);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

    // obtenerNumero()
//      .then((num) => {
//        multiplicarPorDos(num);   //imprime undefined porque no se está retornando el resultado
//   })                             //faltó retornar dentro del .then de multiplicarPorDos
//       .then((resultado) => {     //imprime el resultado correcto porque se retornó el 
// resultado de multiplicarPorDos
//         console.log(resultado);
//  });