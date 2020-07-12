export default function apiresult(state = [], action){
    switch (action.type) {
        case 'FETCH_STARSHIPS':
            return action.payload;
        default:
            return state;
    }
}