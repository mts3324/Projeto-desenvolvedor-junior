import { TaskService } from '../services/TaskService.js';

export class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }

  addTask(title, description) {
    return this.taskService.addTask(title, description);
  }

  deleteTask(id) {
    this.taskService.deleteTask(id);
  }

  toggleTaskStatus(id) {
    this.taskService.toggleTaskStatus(id);
  }

  getTasksCount() {
    return this.taskService.getTasksCount();
  }

  getTasks(filterType, searchText) {
    return this.taskService.getTasks(filterType, searchText);
  }

  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}