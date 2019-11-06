import * as messager from './messager';

const TODAY = new Date();
const rtf = new Intl.RelativeTimeFormat({ localeMatcher: 'best fit', style: 'long', numeric: 'auto' });
const dtf = new Intl.DateTimeFormat();

function daysLeft(date) {
  return Math.ceil((date - TODAY) / (1000 * 3600 * 24));
}

function formatDueDate(todo) {
  if (todo.dueDate) {
    return `${dtf.format(todo.dueDate)} (${rtf.format(daysLeft(todo.dueDate), 'days')})`;
  }
  return 'No date';
}

export default class DomTodo {
  constructor() {
    this.displayId = -1;
    this.element = document.createElement('div');
    this.title = document.createElement('h3');
    this.description = document.createElement('p');
    this.dueDate = document.createElement('time');
    this.priority = document.createElement('div');
    this.priority.className = 'priority';
    this.deleteBtn = document.createElement('button');
    this.deleteBtn.className = 'delete-btn';
    this.deleteBtn.textContent = 'Delete';
    this.editBtn = document.createElement('button');
    this.editBtn.className = 'edit-btn';
    this.editBtn.textContent = 'Edit';
    this.element.append(
      this.title,
      this.description,
      this.dueDate,
      this.priority,
      this.editBtn,
      this.deleteBtn,
    );

    this.deleteBtn.addEventListener('click', () => {
      messager.postDeleteTodo(this.displayId);
    });

    this.editBtn.addEventListener('click', () => {
      messager.postEditTodo(this.displayId);
    });
  }

  appendTo(container) {
    container.append(this.element);
  }

  display(todo) {
    this.displayId = todo.id;
    this.title.textContent = todo.title;
    this.description.textContent = todo.description;
    // this.dueDate.textContent = todo.dueDate ? todo.dueDate.toLocaleDateString() : 'No date';
    this.dueDate.textContent = formatDueDate(todo);
    this.priority.textContent = todo.priority;
    this.element.classList.remove('hide');
  }

  hide() {
    this.element.classList.add('hide');
  }
}
