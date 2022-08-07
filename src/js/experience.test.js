import { getLevel } from './experience';

describe('getLevel', () => {
  it('returns the correct level', () => {
    expect(getLevel(0).name).toEqual('Apprentice');
    expect(getLevel(10).name).toEqual('Apprentice');
    expect(getLevel(50).name).toEqual('Adventurer');
    expect(getLevel(100).name).toEqual('Slayer');
    expect(getLevel(200).name).toEqual('Master');
    expect(getLevel(400).name).toEqual('Grandmaster');
    expect(getLevel(800).name).toEqual('Legendary');
    expect(getLevel(1600).name).toEqual('Legendary');
    expect(getLevel(99999).name).toEqual('Legendary');
  });
});
