export const DEFAULT_PROJECT_NAME = 'default';
export const APPLICATION_ID = 'main';
export const PRIORITIES = ['low', 'medium', 'high'];

const qry = document.querySelector.bind(document);

function hideElement(querySelector) {
  qry(querySelector).classList.add('hide');
}
function showElement(querySelector) {
  qry(querySelector).classList.remove('hide');
}

function toggleClass(reference, newClass, classes = []) {
  const element = (typeof reference === 'string') ? qry(reference) : reference;
  classes.forEach((cls) => {
    if (cls !== newClass) {
      element.classList.remove(cls);
    }
  });
  element.classList.add(newClass);
}

export { hideElement, showElement, toggleClass };
