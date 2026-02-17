let counter = 0; // Define la variable contador
const span = document.getElementById("counter"); // Define el elemento span del contador

function refreshValue() {
    span.textContent = counter; // Actualiza el texto del contador
}

function decrement() {
    counter--; // Decrementa el contador
    refreshValue(); // Actualiza el valor del contador
}

function increment() {
    counter++; // Incrementa el contador
    refreshValue(); // Actualiza el valor del contador
}

function clearCounter() {
    counter = 0; // Resetea el contador
    refreshValue(); // Actualiza el valor del contador
}