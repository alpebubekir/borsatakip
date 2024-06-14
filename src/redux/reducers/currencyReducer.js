const initialState = {
    currency: [],
    error: null
};


const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EXCHANGE_RATE_SUCCESS":
            return {
                ...state,
                currency: action.payload,
                error: null
            };
        case "FETCH_EXCHANGE_RATE_ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default currencyReducer;