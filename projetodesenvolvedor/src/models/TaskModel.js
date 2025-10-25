export class Task {
  constructor(id, title, description, status = 'pending', creationDate = new Date()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.creationDate = creationDate;
  }

  toggleStatus() {
    this.status = this.status === 'pending' ? 'completed' : 'pending';
  }

  isCompleted() {
    return this.status === 'completed';
  }
}