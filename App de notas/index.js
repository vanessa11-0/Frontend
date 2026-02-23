
let notes = [];     //arreglo donde se almacenan las notas

const titleInput = document.getElementById('noteTitle');        //aquí se busca en el html el elemento con el id
const contentInput = document.getElementById('noteContent');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

addBtn.addEventListener('click', () => {
    const title = titleInput.value; //obtiene el valor del título y el contenido ingresados por el usuario
    const content = contentInput.value;

    if (title.trim() && content.trim()) {   //
        const newNote = {       //crea un nuevo objeto nota con un id único basado en el tiempo actual
            id: Date.now(),        //asigna un id único basado en el tiempo actual
            title: title,       //asigna el título y el contenido ingresados por el usuario
            content: content,   //inicialmente, la nota no es importante
            important: false
        };
        notes.push(newNote);    //agrega la nueva nota al arreglo
        renderNotes();      //actualiza la visualización de las notas
        
        // Limpiar
        titleInput.value = '';
        contentInput.value = '';
    } else {
        alert("¡Escribe algo antes de agregar la nota!");
    }
});

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

function toggleImportant(id) {
    notes = notes.map(note => {
        if (note.id === id) note.important = !note.important;
        return note;
    });
    renderNotes();  
}

function renderNotes() {
    notesContainer.innerHTML = '';      //limpia el contenedor de notas antes de volver a renderizar

    const sortedNotes = [...notes].sort((a, b) => b.important - a.important);       //

    sortedNotes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = `note ${note.important ? 'important' : ''}`;
        
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <div class="actions">
                <span onclick="toggleImportant(${note.id})">${note.important ? '★' : '☆'}</span>
                <span onclick="deleteNote(${note.id})">🗑️</span>
            </div>
        `;
        notesContainer.appendChild(noteDiv);
    });
}