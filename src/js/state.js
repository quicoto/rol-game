const stateName = 'gamestate';
const initialState = {
  player: {
    name: "Adventurer",
    health: {
      current: 100,
      total: 100,
    },
  },
};
let state = {};

export function save() {
  window.localStorage.setItem(stateName, JSON.stringify(state));
}

export function init() {
  state = JSON.parse(window.localStorage.getItem(stateName)) || initialState;

  save();

  return state;
}

export function get() {
  return state;
}

export function reset() {
  state = initialState;
  save();
}
