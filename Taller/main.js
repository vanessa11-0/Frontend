import { TaskState } from './state.js';
import { StorageManager } from './persistance.js';
import { TaskService } from './service.js';
import { TaskUI } from './ui.js';


const state = new TaskState();
const storage = new StorageManager();

// 2. Inyectar dependencias en el servicio
const service = new TaskService(storage, state);

// 3. Inyectar servicio en la UI
const ui = new TaskUI(service);

// 4. Arrancar
ui.init();