export default class DomTodo {
  constructor() {
    this.displayId = -1;
    this.element = document.createElement('div');
    this.title = document.createElement('h3');
    this.description = document.createElement('p');
    this.dueDate = document.createElement('time');
    this.priority = document.createElement('div');
    this.priority.className = 'priority';
    this.element.append(this.title, this.description, this.dueDate, this.priority);
  }

  appendTo(container) {
    container.append(this.element);
  }

  display(todo) {
    this.displayId = todo.id;
    this.title.textContent = todo.title;
    this.description.textContent = todo.description;
    this.dueDate.textContent = todo.dueDate ? todo.dueDate.toLocaleDateString() : 'No date';
    this.priority.textContent = todo.priority;
    this.element.classList.remove('hide');
  }

  hide() {
    this.element.classList.add('hide');
  }
}
