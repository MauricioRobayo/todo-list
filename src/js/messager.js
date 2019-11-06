const subscribers = {};

const CHANGED_TOPIC = 'changed';
const CREATE_PROJECT_TOPIC = 'create-project';
const CREATE_TODO_TOPIC = 'create-todo';
const UPDATE_TODO_TOPIC = 'update-todo';
const SWITCH_PROJECT_TOPIC = 'switched-project';
const DELETE_TODO_TOPIC = 'delete-todo';
const EDIT_TODO_TOPIC = 'edit-todo';

function subscribe(topic, id, callback) {
  if (!subscribers[topic]) {
    subscribers[topic] = {};
  }
  subscribers[topic][id] = callback;
}

function unsubscribe(topic, id) {
  if (subscribers[topic]) {
    delete subscribers[topic][id];
  }
}

function publish(topic, message) {
  if (subscribers[topic]) {
    const followers = subscribers[topic];
    Object.keys(followers).forEach((id) => {
      // eslint-disable-next-line no-console
      console.log('Messager-Publish:', {
        topic,
        id,
        message: JSON.stringify(message),
      });
      followers[id](id, message);
    });
  }
}

function subscribeChanged(id, callback) {
  subscribe(CHANGED_TOPIC, id, callback);
}

function postChanged(subject) {
  publish(CHANGED_TOPIC, { subject });
}

function subscribeCreateProject(id, callback) {
  subscribe(CREATE_PROJECT_TOPIC, id, callback);
}

function postCreateProject(projectName) {
  publish(CREATE_PROJECT_TOPIC, { projectName });
}

function subscribeCreateTodo(id, callback) {
  subscribe(CREATE_TODO_TOPIC, id, callback);
}

function postCreateTodo(properties) {
  publish(CREATE_TODO_TOPIC, properties);
}

function subscribeUpdateTodo(id, callback) {
  subscribe(UPDATE_TODO_TOPIC, id, callback);
}

function postUpdateTodo(properties) {
  publish(UPDATE_TODO_TOPIC, properties);
}

function subscribeSwitchProject(id, callback) {
  subscribe(SWITCH_PROJECT_TOPIC, id, callback);
}

function postSwitchProject(projectName) {
  publish(SWITCH_PROJECT_TOPIC, { projectName });
}

function subscribeDeleteTodo(id, callback) {
  subscribe(DELETE_TODO_TOPIC, id, callback);
}

function postDeleteTodo(todoId) {
  publish(DELETE_TODO_TOPIC, { todoId });
}

function subscribeEditTodo(id, callback) {
  subscribe(EDIT_TODO_TOPIC, id, callback);
}

function postEditTodo(todoId) {
  publish(EDIT_TODO_TOPIC, { todoId });
}

export {
  CHANGED_TOPIC,
  CREATE_PROJECT_TOPIC,
  CREATE_TODO_TOPIC,
  SWITCH_PROJECT_TOPIC,

  unsubscribe,

  subscribeChanged,
  postChanged,

  subscribeCreateProject,
  postCreateProject,

  subscribeCreateTodo,
  postCreateTodo,

  subscribeUpdateTodo,
  postUpdateTodo,

  subscribeSwitchProject,
  postSwitchProject,

  subscribeDeleteTodo,
  postDeleteTodo,

  subscribeEditTodo,
  postEditTodo,

};
