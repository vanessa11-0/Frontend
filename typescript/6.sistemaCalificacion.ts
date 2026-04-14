//Crea una interfaz Calificación con estudianteId, materia, categoría ("tareas","quices", "examen") y nota.
//Escribe una función que calcule el promedio por categoría para un estudiante específico.

interface Calificacion {
    estudianteId: number;
    materia: string;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
}

function calcularPromedioCategoria(
    calificaciones: Calificacion[], 
    idEstudiante: number, 
    categoriaBusqueda: "tareas" | "quices" | "examen"
): number {
    const notasFiltradas = calificaciones.filter(c => 
        c.estudianteId === idEstudiante && c.categoria === categoriaBusqueda
    );

    if (notasFiltradas.length === 0) return 0;
    const suma = notasFiltradas.reduce((acumulado, c) => acumulado + c.nota, 0);
    return suma / notasFiltradas.length;
}

const misNotas: Calificacion[] = [
    { estudianteId: 101, materia: "TypeScript", categoria: "tareas", nota: 4.5 },
    { estudianteId: 101, materia: "TypeScript", categoria: "tareas", nota: 3.5 },
    { estudianteId: 101, materia: "TypeScript", categoria: "quices", nota: 5.0 },
    { estudianteId: 102, materia: "Java", categoria: "tareas", nota: 4.0 }
];

const promedioTareas = calcularPromedioCategoria(misNotas, 101, "tareas");
console.log(`El promedio de tareas del estudiante 101 es: ${promedioTareas}`);