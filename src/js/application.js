import Project from './project';

const projects = {};
let activeProject = null;

function createProject(event) {
  const formData = new FormData(event.target);
  const projectName = formData.get('project-name');
  projects[projectName] = new Project(projectName);
  activeProject = projectName;
}

function createTodo(event) {
  const formData = new FormData(event.target);
  const title = formData.get('todo-title');
  const description = formData.get('todo-description');
  const dueDate = formData.get('todo-due-date');
  const priority = formData.get('todo-priority');
  projects[activeProject].createTodo({
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

export { setupProject, setupTodo };
