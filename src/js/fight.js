import * as State from './state';
import * as Dialog from './dialog';
import * as templates from './fight.templates';
import * as Profile from './profile';
import monsters from './data/monsters';
import { randomizeArray } from './utils';
import { emojiConfiguration } from './emoji';

const _$ = {};
const _ = {
  currentEnemy: null,
};

function _dead() {
  _$.game.innerHTML = templates.dead;

  twemoji.parse(_$.game, emojiConfiguration);
}

function _findFight() {
  _.currentEnemy = randomizeArray(monsters)[0];

  Dialog.setContent(templates.match(_.currentEnemy), 'fight');
  Dialog.open();
}

function _fight() {
  _.state.player.health.current = Math.max(
    0,
    _.state.player.health.current -= _.currentEnemy.attack,
  );

  State.save();

  if (_.state.player.health.current === 0) {
    _dead();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(`${_.currentEnemy.name} attacked you for ${_.currentEnemy.attack} damage.`);
  // eslint-disable-next-line no-console
  console.log(`You have ${_.state.player.health.current} health remaining.`);

  Profile.refresh();
}

function _escape() {

}

function _handleDialogClick(event) {
  const $target = event.target;

  const action = $target.dataset?.action;

  if (action) {
    // eslint-disable-next-line default-case
    switch (action) {
      case 'fight':
        _fight();
        break;
      case 'escape':
        _escape();
        break;
    }

    Dialog.close();
  }
}

function _setElements() {
  _$.game = document.getElementById('game');
  _$.fightSearch = document.getElementById('fight-search');
}

function _addEventListeners() {
  _$.fightSearch.addEventListener('click', _findFight);
  Dialog.getElement().addEventListener('click', _handleDialogClick);
}

export function init() {
  _.state = State.get();

  _setElements();
  _addEventListeners();

  if (_.state.player.health.current === 0) {
    _dead();
  }
}
