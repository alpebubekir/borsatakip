export const fetchCryptoSuccess = (cryptos, page) => ({
    type: "FETCH_CRYPTO_SUCCESS",
    payload: { cryptos, page }
});

export const fetchCryptoError = (error) => ({
    type: "FETCH_CRYPTO_ERROR",
    payload: error
});

export const fetchCrypto = (page = 1) => {
    return async (dispatch) => {
        console.log(page);
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=1000&page=${page}&sparkline=false`);
            const data = await response.json();
            dispatch(fetchCryptoSuccess(data, page));
        } catch (error) {
            console.error(error);
            dispatch(fetchCryptoError(error.toString()));
        }
    };
};
