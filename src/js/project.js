import Todo from './todo';
import * as messager from './messager';

/* eslint-disable no-underscore-dangle */
export default class Project {
  constructor({ name } = { name: 'default' }) {
    this.name = name;
    this.todos = {};
    this.count = 0;
  }

  createTodo(attr) {
    return this.addTodo(new Todo(attr));
  }

  addTodo(todo) {
    this.todos[todo.id] = todo;
    this.count += 1;
    // publish('changed', { subject: this });
    messager.postChanged(this);
    return todo;
  }

  removeTodo(id) {
    delete this.todos[id];
    this.count -= 1;
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
