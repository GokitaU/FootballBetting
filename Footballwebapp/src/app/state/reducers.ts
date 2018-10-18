export function reducers(state, action) {
    
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload
            };
        case 'SCORE_REFRESH':
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ' + action.payload);
            return {
                ...state,
                score: action.payload
            };
        default:
            return state;
    }
}