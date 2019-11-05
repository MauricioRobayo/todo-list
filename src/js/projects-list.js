import { publish, subscribe } from './messager';

function loadProject(event) {
  if (event.target.tagName === 'LI') {
    const { projectName } = event.target.dataset;
    publish('switched-project', { projectName });
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
  subscribe('create-project', 'project-list', (id, { projectName }) => {
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
  publish('switched-project', { projectName });
}
