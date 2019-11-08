import * as messager from './messager';

const projectsList = [];

function loadProject(event) {
  if (event.target.tagName === 'LI') {
    const { projectName } = event.target.dataset;
    messager.postSwitchProject(projectName);
  }
}

function createListElement(key) {
  const li = document.createElement('li');
  li.dataset.projectName = key;
  li.textContent = key;
  return li;
}

export default function setupProjectsList(projects) {
  const ul = document.querySelector('#projects-list');
  messager.subscribeCreateProject('project-list', (id, { projectName }) => {
    if (projectsList.includes(projectName)) {
      return;
    }
    projectsList.push(projectName);
    const li = createListElement(projectName);
    ul.append(li);
  });
  const fragment = document.createDocumentFragment();
  Object.keys(projects).forEach((key) => {
    const li = createListElement(key);
    fragment.append(li);
  });
  ul.append(fragment);
  ul.addEventListener('click', loadProject);
  const [projectName] = Object.keys(projects);
  // publish('switched-project', { projectName });
  messager.postSwitchProject(projectName);
}
