/* eslint-disable no-underscore-dangle */
const priorities = ['low', 'medium', 'high'];
let sequentialId = 0;

export default class Todo {
  constructor(values) {
    this.update(values);
    this.id = sequentialId;
    sequentialId += 1;
  }

  update({
    title,
    description = '',
    dueDate = null,
    priority = 0,
    completed = false,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  isDue() {
    return this._dueDate && new Date(this._dueDate) > new Date();
  }

  get json() {
    return JSON.stringify({
      title: this._title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      completed: this.completed,
    });
  }

  static fromJSON(json) {
    return new Todo(JSON.parse(json));
  }

  set completed(status) {
    this._completed = status;
  }

  get completed() {
    return this._completed;
  }

  set title(newTitle) {
    if (typeof newTitle !== 'string' || newTitle === '') {
      throw new Error('Please set a title for the TODO.');
    }
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get description() {
    return this._description;
  }

  set dueDate(newDueDate) {
    this._dueDate = newDueDate ? new Date(newDueDate.replace(/-/g, '/')) : null;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(newPriority) {
    const value = newPriority.toLowerCase();
    this._priority = priorities.includes(value)
      ? priorities.indexOf(value)
      : 0;
  }

  get priority() {
    return priorities[this._priority];
  }
}
