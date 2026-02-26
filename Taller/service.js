export class TaskService {
    constructor(storage, state) {
        this.storage = storage;
        this.state = state;
        this.state.setTasks(this.storage.load());
    }

    async fetchFromApi() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await response.json();
        const newTasks = data.map(t => ({ title: t.title, completed: t.completed }));
        
        this.state.setTasks([...this.state.getTasks(), ...newTasks]);
        this.storage.save(this.state.getTasks());
    }

    toggleTask(index) {
        const tasks = this.state.getTasks();
        tasks[index].completed = !tasks[index].completed;
        this.storage.save(tasks);
    }

    deleteTask(index) {
        const tasks = this.state.getTasks();
        tasks.splice(index, 1);
        this.storage.save(tasks);
    }

    addNewTask(title) {
        this.state.addTask({ title, completed: false });
        this.storage.save(this.state.getTasks());
    }
}