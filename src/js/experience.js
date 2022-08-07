import * as State from './state';

export const levels = [
  {
    name: 'Apprentice',
    experienceMin: 0,
    experienceMax: 49,
  },
  {
    name: 'Adventurer',
    experienceMin: 50,
    experienceMax: 99,
  },
  {
    name: 'Slayer',
    experienceMin: 100,
    experienceMax: 199,
  },
  {
    name: 'Master',
    experienceMin: 200,
    experienceMax: 399,
  },
  {
    name: 'Grandmaster',
    experienceMin: 400,
    experienceMax: 799,
  },
  {
    name: 'Legendary',
    experienceMin: 800,
    experienceMax: 9999999999999,
  },
];

const _$ = {};

function _setElements() {
  _$.progressBar = document.querySelector('.experience .progress-bar');
}

export function getLevel(experience) {
  return levels.find(
    (level) => (experience >= level.experienceMin) && (experience <= level.experienceMax),
  );
}

export function update() {
  const level = getLevel(State.get().player.experience);

  _$.progressBar.style.width = `${((State.get().player.experience - level.experienceMin) / (level.experienceMax - level.experienceMin)) * 100}%`;
  // _$.progressBar.style.width = `${State.get().player.experience}%`;
}

export function init() {
  _setElements();
  update();
}
