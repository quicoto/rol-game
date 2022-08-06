import { spinner } from './spinner';
import { emojiConfiguration } from './emoji';

const _$ = {};

function _setElements() {
  _$.dialog = document.querySelector('dialog');
}

_setElements();

export function getElement() {
  return _$.dialog;
}

export function open() {
  _$.dialog.removeAttribute('hidden');
  _$.dialog.setAttribute('open', '');
  _$.dialog.setAttribute('tabindex', '0');
  document.body.classList.add('dialog-open');
  document.body.setAttribute('aria-hidden', 'true');
}

export function close() {
  _$.dialog.setAttribute('hidden', true);
  document.body.classList.remove('dialog-open');
  document.body.removeAttribute('aria-hidden');
}
/**
 * @param  {} html
 * @param  {} cssClass
 */
export function setContent(html, cssClass) {
  _$.dialog.classList.add(cssClass);
  _$.dialog.innerHTML = `Searching for monsters...${spinner}`;

  setTimeout(() => {
    _$.dialog.innerHTML = html;

    twemoji.parse(_$.dialog, emojiConfiguration);
  }, 1500);
}
