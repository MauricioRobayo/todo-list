import Project from './project';
import DomProject from './dom-project';
import * as messager from './messager';
import { setupForms, fillEditForm } from './forms-manager';
import setupProjectsList from './projects-list';

const DEFAULT_PROJECT_NAME = 'default';
const APPLICATION_ID = 'main';

const domProject = new DomProject();
const projects = {};
let activeProject = DEFAULT_PROJECT_NAME;

function setOpenAttribute(querySelector, state) {
  document.querySelector(querySelector).open = state;
}

function hideElement(querySelector) {
  document.querySelector(querySelector).classList.add('hide');
}
function showElement(querySelector) {
  document.querySelector(querySelector).classList.remove('hide');
}

function createProject(id, { projectName: name }) {
  if (projects[name]) {
    messager.postSwitchProject(name);
    return;
  }
  const newProject = new Project({ name });
  projects[name] = newProject;
  domProject.project = newProject;
  messager.postChanged(newProject);
  activeProject = name;
}

function switchProject(id, { projectName }) {
  domProject.project = projects[projectName];
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
  hideElement('#create-todo');
  showElement('#edit-todo');
  setOpenAttribute('#forms-container details', true);
}

function updateTodo(id, data) {
  projects[activeProject].findById(data.todoId).update(data);
  messager.postChanged(projects[activeProject]);
  showElement('#create-todo');
  hideElement('#edit-todo');
  setOpenAttribute('#forms-container details', false);
}

function createSubscriptions() {
  messager.subscribeCreateProject(APPLICATION_ID, createProject);
  messager.subscribeSwitchProject(APPLICATION_ID, switchProject);
  messager.subscribeCreateTodo(APPLICATION_ID, createTodo);
  messager.subscribeDeleteTodo(APPLICATION_ID, deleteTodo);
  messager.subscribeEditTodo(APPLICATION_ID, editTodo);
  messager.subscribeUpdateTodo(APPLICATION_ID, updateTodo);
}

function getProjectsFromLocalStorage() {
  const localData = { ...localStorage };
  const projectsKeys = Object.keys(localData).filter((key) => key.startsWith('osma-tlp-'));
  projectsKeys.forEach((projectKey) => {
    const projectName = projectKey.replace('osma-tlp-', '');
    projects[projectName] = Project.getFromLocalStorage(projectName);
    messager.postCreateProject(projectName);
  });
  messager.postSwitchProject(activeProject);
}

export default function runApp() {
  createSubscriptions();
  domProject.appendTo(document.querySelector('#project-container'));
  setupForms();
  setupProjectsList(projects);
  getProjectsFromLocalStorage();
  messager.postCreateProject(DEFAULT_PROJECT_NAME);
}
