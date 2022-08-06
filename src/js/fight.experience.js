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

export function getLevel() {
  const playerExperience = State.get().player.experience;

  return levels.find((level) => playerExperience <= level.experience);
}
