//Crea una interfaz Tarea que tenga las propiedades: id, descripción, si está completada, 
//y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
//Implementa una función que reciba una lista de tareas y devuelva solo aquellas que estén en progreso o pendientes.

type TaskStatus = "pendiente" | "en_progreso" | "finalizada";

interface Task {
id: number,
description: string,
isComplete: boolean,
status: TaskStatus
}

function getPendingAndProgressTasks(tasks: Task[]): Task[] {
return tasks.filter((task) => task.status != "finalizada");
};

const misTareas: Task[] = [
    { id: 1, description: "Hacer café", isComplete: false, status: "pendiente" },
    { id: 2, description: "Programar en TS", isComplete: false, status: "en_progreso" },
    { id: 3, description: "Dormir", isComplete: true, status: "finalizada" }
];


const tareasFiltradas = getPendingAndProgressTasks(misTareas);
console.log("Tareas pendientes o en progreso:", tareasFiltradas);