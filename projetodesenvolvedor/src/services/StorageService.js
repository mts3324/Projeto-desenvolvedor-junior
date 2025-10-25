const STORAGE_KEY = 'tasks';

export class StorageService {
  static saveTasks(tasks) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      return true;
    } catch (error) {
      return false;
    }
  }

  static loadTasks() {
    try {
      const tasks = localStorage.getItem(STORAGE_KEY);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      return [];
    }
  }
}