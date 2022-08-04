import { spinner } from './spinner';

const _$ = {};

function _setElements() {
  _$.dialog = document.querySelector('dialog');
}

_setElements();

export function open() {
  _$.dialog.showModal();
}

export function close() {
  _$.dialog.removeAttribute('open');
}

export function setContent(html) {

  _$.dialog.innerHTML = `Searching for monsters...${spinner}`;

  setTimeout(() => {
    _$.dialog.innerHTML = html;
  }, 1500);
}