import Todo from './todo';
import * as messager from './messager';

/* eslint-disable no-underscore-dangle */
export default class Project {
  constructor({ name } = { name: 'default' }) {
    this.name = name;
    this.todos = {};
    this.count = 0;
    messager.subscribeChanged(this.name, (id, { subject }) => {
      if (subject === this) {
        this.saveToLocalStorage();
      }
    });
  }

  saveToLocalStorage() {
    localStorage[`osma-tlp-${this.name}`] = this.count ? JSON.stringify(Object.values(this.todos).map((todo) => todo.json)) : '[]';
  }

  static getFromLocalStorage(projectName) {
    const project = new Project({ name: projectName });
    const todos = JSON.parse(localStorage[`osma-tlp-${projectName}`]);
    todos.forEach((todo) => {
      project.createTodo(JSON.parse(todo));
    });
    project.count = todos.length;
    return project;
  }

  createTodo(attr) {
    return this.addTodo(new Todo(attr));
  }

  addTodo(todo) {
    this.todos[todo.id] = todo;
    this.count += 1;
    messager.postChanged(this);
    return todo;
  }

  removeTodo(id) {
    delete this.todos[id];
    this.count -= 1;
  }

  findById(id) {
    return this.todos[id];
  }

  forEach(fn) {
    Object.values(this.todos).forEach(fn);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}
