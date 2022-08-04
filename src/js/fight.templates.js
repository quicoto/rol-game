/**
 * @param  {object} enemy
 * @param {string} enemy.name
 * @return {string}
 */
export function match(enemy) {
  let html = '';

  html += `<h3>Look! A ${enemy.name}</h3>`;
  html += `<p>Do you want to fight it?</p>`;

  return html;
}