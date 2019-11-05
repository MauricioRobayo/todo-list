import Project from './project';
import DomProject from './dom-project';
import * as messager from './messager';
import setupForms from './forms-manager';
import setupProjectsList from './projects-list';

const DEFAULT_PROJECT_NAME = 'default';

const domProject = new DomProject();
const projects = { default: new Project({ name: DEFAULT_PROJECT_NAME }) };
let activeProject = DEFAULT_PROJECT_NAME;

export default function runApp() {
  domProject.appendTo(document.querySelector('#project-container'));

  messager.subscribeCreateProject('main', (id, message) => {
    const { projectName: name } = message;
    const newProject = new Project({ name });
    projects[name] = newProject;
    domProject.project = newProject;
    // publish('changed', { subject: newProject });
    messager.postChanged(newProject);
    activeProject = name;
  });

  messager.subscribeSwitchProject('main', (id, { projectName }) => {
    domProject.project = projects[projectName];
    // publish('changed', { subject: projects[projectName] });
    messager.postChanged(projects[projectName]);
    activeProject = projectName;
  });

  messager.subscribeCreateTodo('main', (id, message) => {
    projects[activeProject].createTodo(message);
  });

  setupForms();
  setupProjectsList(projects);
}
