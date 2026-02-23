const users = [
{ "id": 1, "name": "Alejandro Gómez", "email": "alejandro.gomez@example.com" },
{ "id": 2, "name": "María Fernanda López", "email": "maria.lopez@example.com" },
{ "id": 3, "name": "Carlos Andrés Ruiz", "email": "carlos.ruiz@example.com" },
{ "id": 4, "name": "Laura Daniela Martínez", "email": "laura.martinez@example.com" },
{ "id": 5, "name": "Juan Sebastián Torres", "email": "juan.torres@example.com" }
];

// Función que simula la petición al servidor
function findUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = users.find(u => u.id === parseInt(id));   // Simula la búsqueda 
            
            if (found) {
                resolve(found); 
            } else {
                reject("No se encontró ningún usuario con ese ID.");
            }
        }, 2000);
    });
}

const inputField = document.getElementById('userIdInput');  
const searchBtn = document.getElementById('btnSearch');
const display = document.getElementById('displayArea');

searchBtn.addEventListener('click', () => { 
    const idToSearch = inputField.value;

    display.innerHTML = "<em>Buscando en el servidor... por favor espere.</em>";

    findUserById(idToSearch)
        .then((user) => {
            display.innerHTML = `   
            <div class="success">
                <p><strong>Nombre:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        </div>
`;  
        })
        .catch((error) => {
            display.innerHTML = `<p style="color: red;">${error}</p>`;
        })
        .finally(() => {
            console.log("Proceso de búsqueda completado.");
        });
});