/* eslint-disable no-underscore-dangle */
export default class Project {
  constructor({ name }) {
    this.name = name;
    this.todos = {};
    this.count = 0;
  }

  addTodo(todo) {
    this.todos[todo.id] = todo;
    this.count += 1;
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
