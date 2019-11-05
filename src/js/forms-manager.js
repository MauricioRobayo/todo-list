import { publish } from './messager';

function createProject(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const projectName = formData.get('project-name');
  publish('create-project', { projectName });
}

function createTodo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('todo-title');
  const description = formData.get('todo-description');
  const dueDate = formData.get('todo-due-date');
  const priority = formData.get('todo-priority');
  publish('create-todo', {
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

export default function setupForms() {
  setupProject();
  setupTodo();
}
