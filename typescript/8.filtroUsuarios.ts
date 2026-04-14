//Crea una interfaz Usuario con nombre, edad, estado activo y rol ("admin", "editor","visitante").
//Implementa una función que devuelva únicamente los usuarios que sean mayores de edad, estén activos 
// y no tengan el rol de visitante.

interface Usuario {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
}

function filtrarUsuariosValidos(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(usuario => 
        usuario.edad >= 18 &&              
        usuario.activo === true &&          
        usuario.rol !== "visitante"        
    );
}

const listaUsuarios: Usuario[] = [
    { nombre: "Vanessa", edad: 20, activo: true, rol: "admin" },    
    { nombre: "Carlos", edad: 17, activo: true, rol: "editor" },    
    { nombre: "Ana", edad: 25, activo: false, rol: "admin" },       
    { nombre: "Luis", edad: 30, activo: true, rol: "visitante" },   
    { nombre: "Marta", edad: 22, activo: true, rol: "editor" }      
];

const usuariosFiltrados = filtrarUsuariosValidos(listaUsuarios);
console.log("Usuarios que cumplen los requisitos:", usuariosFiltrados);