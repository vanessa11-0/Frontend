export class TaskUI {
    constructor(service) {
        this.service = service;
        this.list = document.getElementById("task-list");
        this.input = document.getElementById("task-input");
        this.form = document.getElementById("task-form");
        this.apiButton = document.getElementById("load-api");
    }

    init() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!this.input.value.trim()) return;
            this.service.addNewTask(this.input.value);
            this.input.value = "";
            this.render();
        });

        this.apiButton.addEventListener("click", async () => {
            await this.service.fetchFromApi();
            this.render();
        });

        this.render();
    }

    render() {
        this.list.innerHTML = "";
        this.service.state.getTasks().forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.title;
            if (task.completed) li.classList.add("completed");

            li.onclick = () => {
                this.service.toggleTask(index);
                this.render();
            };

            const btn = document.createElement("button");
            btn.textContent = "X";
            btn.onclick = (e) => {
                e.stopPropagation();
                this.service.deleteTask(index);
                this.render();
            };

            li.appendChild(btn);
            this.list.appendChild(li);
        });
    }
}