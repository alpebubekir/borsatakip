const initialState = {
    crypto: [],
    page: 1,
    error: null
};

const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CRYPTO_SUCCESS":
            return {
                ...state,
                crypto: action.payload.page === 1 ? action.payload.cryptos : [...state.crypto, ...action.payload.cryptos],
                page: action.payload.page,
                error: null
            };
        case "FETCH_CRYPTO_ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default cryptoReducer;
