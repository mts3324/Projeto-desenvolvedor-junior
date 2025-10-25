import { Task } from './TaskModel.js';

export class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTask(id) {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id, updatedTask) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  getPendingTasks() {
    return this.tasks.filter(task => task.status === 'pending');
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.status === 'completed');
  }

  getTasksCount() {
    return {
      total: this.tasks.length,
      pending: this.getPendingTasks().length,
      completed: this.getCompletedTasks().length
    };
  }

  filterTasks(filterType, searchText = '') {
    let filtered = this.tasks;
    
    if (filterType === 'pending') {
      filtered = this.getPendingTasks();
    } else if (filterType === 'completed') {
      filtered = this.getCompletedTasks();
    }

    if (searchText) {
      const lowerSearch = searchText.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(lowerSearch) || 
        task.description.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered;
  }
}