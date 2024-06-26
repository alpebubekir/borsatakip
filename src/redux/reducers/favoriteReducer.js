const initialState = {
    favorites: [],
    favoriteCurrencies: [],
    loading: false,
    error: null,
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FAVORITES_SUCCESS':
            return {...state, favorites: action.payload, loading: false};
        case 'FETCH_FAVORITES_ERROR':
            return {...state, error: action.payload, loading: false};
        case 'ADD_FAVORITE_SUCCESS':
            return {...state, favorites: action.payload, loading: false};
        case 'ADD_FAVORITE_ERROR':
            return {...state, error: action.payload, loading: false};
        case 'REMOVE_FAVORITE_SUCCESS':
            return {...state, favorites: action.payload, loading: false};
        case 'REMOVE_FAVORITE_ERROR':
            return {...state, error: action.payload, loading: false};
        case 'FETCH_FAVORITE_CURRENCIES_SUCCESS':
            return {...state, favoriteCurrencies: action.payload, loading: false};
        case 'FETCH_FAVORITE_CURRENCIES_ERROR':
            return {...state, error: action.payload, loading: false};
        case 'ADD_FAVORITE_CURRENCY_SUCCESS':
            return {...state, favoriteCurrencies: action.payload, loading: false};
        case 'ADD_FAVORITE_CURRENCY_ERROR':
            return {...state, error: action.payload, loading: false};
        case 'REMOVE_FAVORITE_CURRENCY_SUCCESS':
            return {...state, favoriteCurrencies: action.payload, loading: false};
        case 'REMOVE_FAVORITE_CURRENCY_ERROR':
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

export default favoriteReducer;
