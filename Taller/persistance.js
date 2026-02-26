export class StorageManager {
    save(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    load() {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    }
}