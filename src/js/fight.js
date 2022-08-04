import * as Dialog from './dialog';
import * as templates from './fight.templates';

export function init() {
  const _$ = {};

  function _findFight() {
    const enemy = {
      name: 'Goblin'
    };
    Dialog.setContent(templates.match(enemy));
    Dialog.open();
  }

  function _setElements() {
    _$.fightSearch = document.getElementById('fight-search');
  }

  function _addEventListeners() {
    _$.fightSearch.addEventListener('click', _findFight);
  }

  _setElements();
  _addEventListeners();
}