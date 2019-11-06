import Project from './project';
import DomProject from './dom-project';
import * as messager from './messager';
import { setupForms, fillEditForm } from './forms-manager';
import setupProjectsList from './projects-list';

const DEFAULT_PROJECT_NAME = 'default';
const APPLICATION_ID = 'main';

const domProject = new DomProject();
const projects = { default: new Project({ name: DEFAULT_PROJECT_NAME }) };
let activeProject = DEFAULT_PROJECT_NAME;

function createProject(id, { projectName: name }) {
  const newProject = new Project({ name });
  projects[name] = newProject;
  domProject.project = newProject;
  messager.postChanged(newProject);
  activeProject = name;
}

function switchProject(id, { projectName }) {
  domProject.project = projects[projectName];
  // publish('changed', { subject: projects[projectName] });
  messager.postChanged(projects[projectName]);
  activeProject = projectName;
}

function createTodo(id, message) {
  projects[activeProject].createTodo(message);
}

function deleteTodo(id, { todoId }) {
  projects[activeProject].removeTodo(todoId);
  messager.postChanged(projects[activeProject]);
}

function editTodo(id, { todoId }) {
  fillEditForm(projects[activeProject].findById(todoId));
}

function updateTodo(id, data) {
  projects[activeProject].findById(data.todoId).update(data);
  messager.postChanged(projects[activeProject]);
}

function createSubscriptions() {
  messager.subscribeCreateProject(APPLICATION_ID, createProject);
  messager.subscribeSwitchProject(APPLICATION_ID, switchProject);
  messager.subscribeCreateTodo(APPLICATION_ID, createTodo);
  messager.subscribeDeleteTodo(APPLICATION_ID, deleteTodo);
  messager.subscribeEditTodo(APPLICATION_ID, editTodo);
  messager.subscribeUpdateTodo(APPLICATION_ID, updateTodo);
}

export default function runApp() {
  domProject.appendTo(document.querySelector('#project-container'));
  createSubscriptions();
  setupForms();
  setupProjectsList(projects);
}
