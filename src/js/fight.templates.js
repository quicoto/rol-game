/**
 * @param  {object} enemy
 * @param {string} enemy.name
 * @return {string}
 */
export function match(enemy) {
  const html = `
<div class="fight-dialog">
  <div class="fight-dialog-content">
    <h2 class="fight-dialog-icon">${enemy.icon}</h2>
    <div>
      <h3 class="mb-1">Watch out, a ${enemy.name}!</h3>
      <p>Do you want to fight it?</p>
      <ul>
        <li><strong>Attack</strong> ${enemy.attack}</li>
        <li><strong>Defense</strong> ${enemy.defense}</li>
        <li><strong>Health</strong> ${enemy.health}</li>
      </ul>
    </div>
  </div>
  <div class="fight-dialog-warning">
    <p>⚠️ You might get hurt if you try to escape!</p>
  </div>
  <div class="dialog-buttons">
    <button data-action="escape" class="btn btn-secondary btn-full">No</button>
    <button data-action="fight" class="btn btn-primary btn-full">Yes</button>
  </div>
</div>
`;

  return html;
}

export const dead = `
<div class="game-over w-100">
  <h2 class="mb-2">
    <span class="game-over-stone">🪦</span> <br />
    <span class="mt-1 mb-2">You died!</span>
  </h2>
  <h3 class="d-flex align-items-center mb-2">
    ☠️ <span class="ml-0-5 mr-0-5">Game over</span> ☠️
  </h3>
</div>
`;
