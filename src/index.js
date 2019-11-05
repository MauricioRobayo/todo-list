import Project from './js/project';
import DomProject from './js/dom-project';
import { unsubscribe } from './js/messager';

const project = new Project();

project.createTodo({
  title: 'Put my kid clothes in the washer machine',
  dueDate: '2019-11-05',
});

project.createTodo({
  title: 'Task 2',
  dueDate: '2019-11-05',
});

project.createTodo({
  title: 'Task 3',
  dueDate: '2019-11-05',
});

project.createTodo({
  title: 'Task 4',
  dueDate: '2019-11-05',
});

const domProject = new DomProject();
domProject.appendTo(document.querySelector('#project-container'));
domProject.project = project;
domProject.updateTodos();


project.createTodo({
  title: 'Task 5',
});

unsubscribe('changed', `dom-${project.name}`);

project.createTodo({
  title: 'Task 6',
  dueDate: '2019-11-05',
});
