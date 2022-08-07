/* eslint-disable no-param-reassign */
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param {Array} array
 * @return {Array}
 */
export function randomizeArray(array = []) {
  if (array.length === 0) return array;

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];

    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function formatNumber(number) {
  return new Intl.NumberFormat('en-US').format(number);
}
