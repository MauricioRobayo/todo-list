/* eslint-disable no-underscore-dangle */
import DomTodo from './dom-todo';

export default class DomProject {
  constructor() {
    this.project = null;
    this.domTodos = [];
    this.element = document.createElement('div');
    this.header = document.createElement('h2');
    this.todosContainer = document.createElement('div');
  }

  createTodo() {
    const node = new DomTodo();
    this.domTodos.push(node);
    this.todosContainer.append(node);
  }

  fillTodos() {
    let index = 0;
    this._project.forEach((todo) => {
      if (index >= this.domTodos.length) {
        this.createTodo();
      }
      this.domTodos[index].display(todo);
      index += 1;
    });
    while (index < this.domTodos.length) {
      this.domTodos[index].hide();
      index += 1;
    }
  }

  set project(prj) {
    this._project = prj;
    if (prj) {
      this.header.textContent = prj.name;
      this.fillTodos();
    }
  }
}
