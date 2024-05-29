const initialState = {
    currency: [],
    supportedCodes: [],
    error: null
};


const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CURRENCY_SUCCESS":
            return {
                ...state,
                currency: action.payload.currency,
                error: null
            };
        case "FETCH_CURRENCY_ERROR":
            return {
                ...state,
                error: action.payload
            };
        case "FETCH_SUPPORTED_CODES_SUCCESS":
            return {
                ...state,
                supportedCodes: action.payload,
                error: null
            };
        case "FETCH_SUPPORTED_CODES_ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default currencyReducer;