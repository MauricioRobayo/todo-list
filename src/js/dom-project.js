/* eslint-disable no-underscore-dangle */
import DomTodo from './dom-todo';
import { subscribe } from './messager';

export default class DomProject {
  constructor() {
    this._project = null;
    this.domTodos = [];
    this.element = document.createElement('div');
    this.header = document.createElement('h2');
    this.todosContainer = document.createElement('div');
    this.element.append(this.header, this.todosContainer);
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
      subscribe('changed', 'dom-project', (id, message) => {
        if (message.subject === this._project) {
          this.updateTodos();
        }
      });
    }
  }
}
