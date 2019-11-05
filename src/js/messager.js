
const subscribers = {};

export function subscribe(topic, id, callback) {
  if (!subscribers[topic]) {
    subscribers[topic] = {};
  }
  subscribers[topic][id] = callback;
}

export function unsubscribe(topic, id) {
  if (subscribers[topic]) {
    delete subscribers[topic][id];
  }
}

export function publish(topic, message) {
  if (subscribers[topic]) {
    const followers = subscribers[topic];
    Object.keys(followers).forEach((id) => followers[id](id, message));
  }
}
