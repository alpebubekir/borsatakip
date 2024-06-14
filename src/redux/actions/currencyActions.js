
export const fetchExchangeRateSuccess = (data) => {


    return {
        type: "FETCH_EXCHANGE_RATE_SUCCESS",
        payload: data
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
            const response = await fetch(`https://api.collectapi.com/economy/currencyToAll?int=1&base=TRY`,{
                headers: {
                    "authorization": "apikey 0L7W9bE1FrywpNBECTj3Ol:6vSbeNGzMr87jBsrcqwgqc",
                    "content-type": "application/json"
                }
            });
            const data = await response.json();
            dispatch(fetchExchangeRateSuccess(data.result.data));
        } catch (error) {
            dispatch(fetchExchangeRateError(error.toString()));
            console.log(error);
        }
    }
}