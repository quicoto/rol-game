import { getRandomInt } from '../utils.js';

export function combat(player, enemy) {
  const playerDamage = getRandomInt(player.maxAttack);
  const enemyDamage = getRandomInt(enemy.maxAttack);

  player.health -= enemyDamage;
  enemy.health -= playerDamage;

  return {
    player,
    enemy,
  };
}

const player = {
  health: 100,
  maxAttack: 10,
};
const enemy = {
  health: 100,
  maxAttack: 10,
};

const result = combat(player, enemy);

// eslint-disable-next-line no-console
console.log(result);
