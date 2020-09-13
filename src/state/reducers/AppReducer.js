export default (state, action) => {
    switch (action.type) {
        case 'RESOLVE_APP': {
            return {
                ...state
            };
        }
        case 'SET_VAL': {
            return {
                ...state,
                val: action.val
            };
        }
        default:
            break;
    }

    return state;
};