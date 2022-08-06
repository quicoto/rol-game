import * as State from './state';

export const levels = [
  {
    name: 'Apprentice',
    experience: 50,
  },
  {
    name: 'Adventurer',
    experience: 100,
  },
  {
    name: 'Slayer',
    experience: 200,
  },
  {
    name: 'Master',
    experience: 400,
  },
  {
    name: 'Grandmaster',
    experience: 800,
  },
  {
    name: 'Legendary',
    experience: 1600,
  },
];

const _$ = {};

function _setElements() {
  _$.progressBar = document.querySelector('.experience .progress-bar');
}

_setElements();

export function update() {
  _$.progressBar.style.width = `${State.get().player.experience}%`;
}

export function init() {
  update();
}

export function getLevel() {
  const playerExperience = State.get().player.experience;

  return levels.find((level) => playerExperience <= level.experience);
}
