export default (state, action) => {
    switch (action.type) {

        case 'field': {
            return {
                ...state,
                [action.field]: action.value
            };
        }
        case 'login': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'success': {
            return {
                ...state,
                loading: false,
                loggedIn: true,
            };
        }
        case 'logout': {
            return {
                ...state,
                loading: true,
                loggedIn: false,
                username: '',
                password: '',
            };
        }
        case 'error': {
            return {
                ...state,
                error: action.error,
                loading: false,
                loggedIn: false,
            };
        }
        default:
            break;
    }

    return state;
};