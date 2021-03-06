/* eslint-disable no-param-reassign */
import { setOpenAttribute } from './globals';
import * as messager from './messager';

function clearForm(formSelector) {
  document
    .querySelector(formSelector)
    .querySelectorAll('input, select')
    .forEach((elem) => {
      switch (elem.tagName) {
        case 'SELECT':
          elem.selectedIndex = 0;
          break;
        default:
          switch (elem.type) {
            case 'checkbox':
              elem.checked = false;
              break;
            case 'submit':
              break;
            default:
              elem.value = '';
          }
      }
    });
}

function createProject(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const projectName = formData.get('project-name');
  // publish('create-project', { projectName });
  messager.postCreateProject(projectName);
}

function createTodo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('todo-title');
  const description = formData.get('todo-description');
  const dueDate = formData.get('todo-due-date');
  const priority = formData.get('todo-priority');
  const completed = formData.get('todo-completed') === 'on';
  messager.postCreateTodo({
    title,
    description,
    dueDate,
    priority,
    completed,
  });
  clearForm('#create-todo');
  setOpenAttribute('#forms-container details', false);
}

function updateTodo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const todoId = formData.get('todo-id');
  const title = formData.get('todo-title');
  const description = formData.get('todo-description');
  const dueDate = formData.get('todo-due-date');
  const priority = formData.get('todo-priority');
  messager.postUpdateTodo({
    todoId,
    title,
    description,
    dueDate,
    priority,
  });
}

function setupProject() {
  const createProjectElem = document.querySelector('#create-project');
  createProjectElem.addEventListener('submit', createProject);
}

function setupTodo() {
  const createTodoElem = document.querySelector('#create-todo');
  createTodoElem.addEventListener('submit', createTodo);
}

function setupTodoEditor() {
  const editTodoElem = document.querySelector('#edit-todo');
  editTodoElem.addEventListener('submit', updateTodo);
}

function setInputValue(id, value) {
  document.getElementById(id).value = value;
}

function fillEditForm(todo) {
  setInputValue('edit-id', todo.id);
  setInputValue('edit-title', todo.title);
  setInputValue('edit-description', todo.description);
  document.querySelector('#edit-completed').checked = todo.completed;
  document.getElementById('edit-due-date').valueAsDate = todo.dueDate;
  setInputValue('edit-priority', todo.priority);
}

function setupForms() {
  setupProject();
  setupTodo();
  setupTodoEditor();
}

export { setupForms, fillEditForm };
