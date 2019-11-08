/* eslint-disable no-underscore-dangle */
import DomTodo from './dom-todo';
import * as messager from './messager';

export default class DomProject {
  constructor() {
    this._project = null;
    this.domTodos = [];
    this.element = document.createElement('div');
    this.header = document.createElement('h2');
    this.todosContainer = document.createElement('div');
    this.element.append(this.header, this.todosContainer);
    messager.subscribeChanged('dom-project', (id, message) => {
      if (message.subject === this._project) {
        this.updateTodos();
      }
    });
  }

  appendTo(container) {
    container.append(this.element);
  }

  createTodo() {
    const node = new DomTodo();
    this.domTodos.push(node);
    node.appendTo(this.todosContainer);
  }

  updateTodos() {
    if (!this._project) {
      return;
    }
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
    this.header.textContent = this._project.name;
  }

  set project(prj) {
    this._project = prj;
  }
}
