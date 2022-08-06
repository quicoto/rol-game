import * as State from './state';
import * as Health from './health';
import * as Experience from './experience';

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
  _$.level = document.getElementById('player-level');
  _$.attack = document.getElementById('player-attack');
  _$.defense = document.getElementById('player-defense');
}

function _addEventListeners() {
  _$.nameForm.addEventListener('submit', _set);
  _$.nameEdit.addEventListener('click', _toggleForm);
}

export function refresh() {
  Health.update();
  Experience.update();
  _$.level.textContent = Experience.getLevel().name;
  _$.attack.textContent = State.get().player.attack;
  _$.defense.textContent = State.get().player.defense;
}

export function init() {
  _setElements();
  _addEventListeners();

  if (State.get().player.name) {
    _$.name.textContent = State.get().player.name;
    _$.nameInput.value = State.get().player.name;
  }

  refresh();
}
