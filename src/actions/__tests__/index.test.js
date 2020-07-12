import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchStarships } from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



const FETCH_STARSHIPS = "FETCH_STARSHIPS";

describe('fetchStarShips', () => {
    it('creates FETCH_STARSHIPS after successfuly fetching starships', () => {
        const store = mockStore({ response: [] })

        return store.dispatch(fetchStarships(1)).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_STARSHIPS);
        });
    });
});