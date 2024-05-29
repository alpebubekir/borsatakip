
export const fetchSupportedCodesSuccess = (data) => {
    return {
        type: "FETCH_SUPPORTED_CODES_SUCCESS",
        payload: data.supported_codes
    }
}

export const fetchSupportedCodesError = (error) => {
    return {
        type: "FETCH_SUPPORTED_CODES_ERROR",
        payload: error
    }

}


export const fetchSupportedCodes = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://v6.exchangerate-api.com/v6/c11a70ab54300f8c984fe87f/codes");
            const data = await response.json();
            dispatch(fetchSupportedCodesSuccess(data));
        } catch (error) {
            dispatch(fetchSupportedCodesError(error.toString()));
        }
    }
}

export const fetchExchangeRateSuccess = (data) => {
    return {
        type: "FETCH_EXCHANGE_RATE_SUCCESS",
        payload: data.conversion_rates
    }
}

export const fetchExchangeRateError = (error) => {
    return {
        type: "FETCH_EXCHANGE_RATE_ERROR",
        payload: error
    }
}

export const fetchExchangeRate = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/c11a70ab54300f8c984fe87f/latest/TRY`);
            const data = await response.json();
            console.log(data);
            dispatch(fetchExchangeRateSuccess(data));
        } catch (error) {
            dispatch(fetchExchangeRateError(error.toString()));
        }
    }
}