import { spinner  } from './spinner';
import * as Profile from './profile';
import * as Fight from './fight';
import * as Health from './health';
import * as State from './state';

function _init() {
  const _ = {
    state: State.init(),
  };
  const _$ = {};

  function _initModules() {
    Profile.init();
    Health.init();
    Fight.init();
  }

  function _resetGame(event) {
    event.preventDefault();
    State.reset();
    window.location.reload(true);
  }

  function _setElements() {
    _$.game = document.getElementById('game');
    _$.loadingGame = document.getElementById('loading-game');
    _$.resetGame = document.querySelectorAll('.reset-game');
  }

  function _addEventListeners() {
    _$.resetGame.forEach(($resetGame) => {
      $resetGame.addEventListener('click', _resetGame);
    });
  }

  _setElements();

  _$.loadingGame.innerHTML = spinner;

  _addEventListeners();
  _initModules();

  setTimeout(() => {
    _$.loadingGame.setAttribute('hidden', true);
    _$.game.removeAttribute('hidden');
  }, 1500);
}

_init();
