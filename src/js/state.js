const stateName = 'gamestate';
const initialState = {
  player: {
    health: 100,
  },
};
let state = {};

export function init() {
  state = JSON.parse(window.localStorage.getItem(stateName)) || initialState;

  return state;
}

export function save() {
  window.localStorage.setItem(stateName, JSON.stringify(state));
}

export function get() {
  return state;
}

export function reset() {
  state = initialState;
  save();
}
