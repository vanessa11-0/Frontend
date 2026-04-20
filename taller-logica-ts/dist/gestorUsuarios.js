"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    usuarios = [];
    crear(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuario "${usuario.nombre}" creado exitosamente.`);
    }
    desactivar(id) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (usuario) {
            usuario.activo = false;
            console.log(`Usuario con ID ${id} ha sido desactivado.`);
        }
        else {
            console.log(`No se encontró el usuario con ID ${id}.`);
        }
    }
    listarActivos() {
        return this.usuarios.filter(u => u.activo === true);
    }
}
const servicio = new UsuarioService();
servicio.crear({ id: 1, nombre: "María", correo: "maria@mail.com", activo: true });
servicio.crear({ id: 2, nombre: "Pepe", correo: "pepe@mail.com", activo: true });
servicio.crear({ id: 3, nombre: "Ana", correo: "ana@mail.com", activo: true });
servicio.desactivar(2);
const activos = servicio.listarActivos();
console.log("Usuarios activos actualmente:", activos);
//# sourceMappingURL=gestorUsuarios.js.map