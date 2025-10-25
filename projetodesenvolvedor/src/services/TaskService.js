import { TaskList } from '../models/TaskListModel.js';
import { Task } from '../models/TaskModel.js';
import { StorageService } from './StorageService.js';

export class TaskService {
  constructor() {
    this.taskList = new TaskList();
    this.loadTasks();
  }

  loadTasks() {
    const tasksData = StorageService.loadTasks();
    tasksData.forEach(taskData => {
      const task = new Task(
        taskData.id,
        taskData.title,
        taskData.description,
        taskData.status,
        new Date(taskData.creationDate)
      );
      this.taskList.addTask(task);
    });
  }

  saveTasks() {
    return StorageService.saveTasks(this.taskList.getAllTasks());
  }

  addTask(title, description) {
    if (!title || title.trim() === '') {
      throw new Error('Título é obrigatório');
    }

    const id = Date.now().toString();
    const task = new Task(id, title.trim(), description.trim());
    this.taskList.addTask(task);
    this.saveTasks();
    return task;
  }

  deleteTask(id) {
    this.taskList.removeTask(id);
    this.saveTasks();
  }

  toggleTaskStatus(id) {
    const task = this.taskList.getTask(id);
    if (task) {
      task.toggleStatus();
      this.taskList.updateTask(id, task);
      this.saveTasks();
    }
  }

  getTasksCount() {
    return this.taskList.getTasksCount();
  }

  getTasks(filterType = 'all', searchText = '') {
    return this.taskList.filterTasks(filterType, searchText);
  }

  getAllTasks() {
    return this.taskList.getAllTasks();
  }
}