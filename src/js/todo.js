/* eslint-disable no-underscore-dangle */
const priorities = ['low', 'medium', 'high'];
let sequentialId = 0;

export default class Todo {
  constructor({
    title,
    description = '',
    dueDate = null,
    priority = 0,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = sequentialId;
    sequentialId += 1;
  }

  isDue() {
    return this._dueDate && new Date(this._dueDate) > new Date();
  }

  get json() {
    return JSON.stringify({
      title: this._title,
      description: this._description,
      dueDate: this._dueDate,
      priority: this._priority,
    });
  }

  static fromJSON(json) {
    return new Todo(JSON.parse(json));
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
    this._dueDate = newDueDate ? new Date(newDueDate) : null;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(newPriority) {
    this._priority = priorities.includes(newPriority)
      ? priorities.indexOf(newPriority)
      : 0;
  }

  get priority() {
    return priorities[this._priority];
  }
}
