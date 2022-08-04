import * as state from './state';

function _init() {
  const _ = {
    state: state.init(),
  };

  _.state.enemy = { health: 50 };

  state.save();

  // eslint-disable-next-line no-console
  console.log(state.get());
}

_init();
