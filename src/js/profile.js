import * as State from './state';

export function init() {
  const _$ = {};

  function _set(event) {
    const name = _$.nameInput.value;

    event.preventDefault();

    State.get().player.name = name;
    State.save();

    _$.name.textContent = name;
    _$.nameForm.setAttribute('hidden', 'true');
  }

  function _toggleForm() {
    _$.nameForm.toggleAttribute('hidden');

    if (!_$.nameForm.hasAttribute('hidden')) {
      _$.nameInput.focus();
    }
  }

  function _setElements() {
    _$.name = document.getElementById('player-name');
    _$.nameEdit = document.getElementById('player-name-edit');
    _$.nameInput = document.getElementById('player-name-input');
    _$.nameForm = document.getElementById('player-name-form');
  }

  function _addEventListeners() {
    _$.nameForm.addEventListener('submit', _set);
    _$.nameEdit.addEventListener('click', _toggleForm);
  }

  _setElements();
  _addEventListeners();

  if (State.get().player.name) {
    _$.name.textContent = State.get().player.name;
    _$.nameInput.value = State.get().player.name;
  }
}
