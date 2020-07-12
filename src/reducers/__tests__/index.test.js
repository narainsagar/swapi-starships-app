import apiresult from '../index';

const FETCH_STARSHIPS = "FETCH_STARSHIPS";

it('handles action of type FETCH_STARSHIPS', () => {
    const action = {
        type: FETCH_STARSHIPS,
        payload: ['New StarShip']
    };

    const newState = apiresult([], action);
    expect(newState).toEqual(['New StarShip']);
});

it('handles action of unknown type', () => {
    const newState = apiresult([], { type: 'RANDOM'});
    expect(newState).toEqual([]);
});