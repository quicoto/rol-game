import * as State from './state';

const _$ = {};

function _setElements() {
  _$.progressBar = document.querySelector('.health .progress-bar');
  _$.healthCurrent = document.getElementById('player-health-current');
  _$.healthTotal = document.getElementById('player-health-total');
}

_setElements();

export function update() {
  let color = "danger";

  _$.healthCurrent.textContent = State.get().player.health.current;
  _$.healthTotal.textContent = State.get().player.health.total;

  _$.progressBar.style.width = `${State.get().player.health.current}%`;

  if (State.get().player.health.current >= 25) { color = "warning"; }
  if (State.get().player.health.current >= 75) { color = "good"; }

  _$.progressBar.style.backgroundColor = `var(--progress-${color})`;

}

export function init() {
  update();
}
