
const subscribers = {};

const CHANGED_TOPIC = 'changed';
const CREATE_PROJECT_TOPIC = 'create-project';
const CREATE_TODO_TOPIC = 'create-todo';
const SWITCH_PROJECT_TOPIC = 'switched-project';

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

function subscribeSwitchProject(id, callback) {
  subscribe(SWITCH_PROJECT_TOPIC, id, callback);
}

function postSwitchProject(projectName) {
  publish(SWITCH_PROJECT_TOPIC, { projectName });
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

  subscribeSwitchProject,
  postSwitchProject,
};
