import Project from './project';
import DomProject from './dom-project';
import { subscribe, publish } from './messager';
import setupForms from './forms-manager';

const domProject = new DomProject();
const projects = {};
let activeProject = null;


export default function runApp() {
  setupForms();
  subscribe('create-project', 'main', (id, message) => {
    const { projectName: name } = message;
    const newProject = new Project({ name });
    projects[name] = newProject;
    domProject.project = newProject;
    domProject.appendTo(document.querySelector('#project-container'));
    publish('changed', { subject: newProject });
    activeProject = name;
  });
  subscribe('create-todo', 'main', (id, message) => {
    projects[activeProject].createTodo(message);
  });
}


// function createProject(event) {
//   const formData = new FormData(event.target);
//   const projectName = formData.get('project-name');
//   projects[projectName] = new Project(projectName);
//   activeProject = projectName;
// }

// function createTodo(event) {
//   const formData = new FormData(event.target);
//   const title = formData.get('todo-title');
//   const description = formData.get('todo-description');
//   const dueDate = formData.get('todo-due-date');
//   const priority = formData.get('todo-priority');
//   projects[activeProject].createTodo({
//     title,
//     description,
//     dueDate,
//     priority,
//   });
// }
// function setupProject() {
//   const createProjectElem = document.querySelector('#create-project');
//   createProjectElem.addEventListener('submit', createProject);
// }

// function setupTodo() {
//   const createTodoElem = document.querySelector('#create-todo');
//   createTodoElem.addEventListener('submit', createTodo);
// }

// export { setupProject, setupTodo };
