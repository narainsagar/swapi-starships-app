import swapi from '../apis/swapi';

export const fetchStarships = (pageNumber) => {
    return async (dispatch) => {
        try {
            const response = await swapi.get(`/starships/?page=${pageNumber}`);
            dispatch({type: 'FETCH_STARSHIPS', payload: response.data});
        } catch(error) {
            dispatch({type: 'HANDLE_ERROR', payload: 'error'});
        }
    };
};