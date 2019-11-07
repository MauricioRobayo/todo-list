import { toggleClass, createElement, PRIORITIES } from './globals';
import * as messager from './messager';

const TODAY = new Date();
const RTF = new Intl.RelativeTimeFormat({ localeMatcher: 'best fit', style: 'long', numeric: 'auto' });
const DTF = new Intl.DateTimeFormat();

function daysLeft(date) {
  return Math.ceil((date - TODAY) / (1000 * 3600 * 24));
}

function formatDueDate(todo) {
  if (todo.dueDate) {
    return `${DTF.format(todo.dueDate)} (${RTF.format(daysLeft(todo.dueDate), 'days')})`;
  }
  return 'No date';
}

export default class DomTodo {
  constructor() {
    this.displayId = -1;
    this.element = createElement('details', { classList: ['todo-container'] });
    this.summary = createElement('summary');
    this.details = createElement('div', { classList: ['details'] });
    this.title = createElement('h3');
    this.description = createElement('p');
    this.dueDate = createElement('time');
    this.priority = createElement('div', { className: 'priority' });
    this.completed = createElement('input', { type: 'checkbox' });
    this.deleteBtn = createElement('button', { className: 'delete-btn' });
    this.editBtn = createElement('button', { className: 'edit-btn' });

    this.summary.append(
      this.completed,
      this.title,
    );
    this.details.append(
      this.description,
      this.dueDate,
      this.priority,
      this.deleteBtn,
      this.editBtn,
    );
    this.element.append(
      this.summary,
      this.details,
    );

    this.deleteBtn.addEventListener('click', () => {
      messager.postDeleteTodo(this.displayId);
    });

    this.editBtn.addEventListener('click', () => {
      messager.postEditTodo(this.displayId);
    });

    this.completed.addEventListener('click', (event) => {
      messager.postUpdateTodo({
        todoId: this.displayId,
        completed: event.target.checked,
      });
    });

  }

  appendTo(container) {
    container.append(this.element);
  }

  display(todo) {
    this.displayId = todo.id;
    // this.summary.classList.add(todo.priority);
    toggleClass(this.summary, todo.priority, PRIORITIES);
    this.title.textContent = todo.title;
    this.completed.checked = todo.completed;
    this.description.textContent = todo.description;
    this.dueDate.textContent = formatDueDate(todo);
    this.priority.textContent = todo.priority;
    // this.priority.classList.add(todo.priority);
    toggleClass(this.priority, todo.priority, PRIORITIES);
    this.element.classList.remove('hide');
  }

  hide() {
    this.element.classList.add('hide');
  }
}
