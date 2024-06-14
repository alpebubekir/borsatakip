import {addNewId, addNewIdCurrency, getIds, getIdsCurrency, removeId, removeIdCurrency} from "../../utils/storage";

export const fetchFavorites = () => {
    return async (dispatch) => {
        try {
            const response = await getIds();
            dispatch({ type: "FETCH_FAVORITES_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "FETCH_FAVORITES_ERROR", payload: error });
        }
    };
}

export const addFavorite = (id) => {
    return async (dispatch) => {
        try {
            await addNewId(id);
            const response = await getIds();
            dispatch({ type: "ADD_FAVORITE_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "ADD_FAVORITE_ERROR", payload: error });
        }
    };
}

export const removeFavorite = (id) => {
    return async (dispatch) => {
        try {
            await removeId(id);
            const response = await getIds();
            dispatch({ type: "REMOVE_FAVORITE_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "REMOVE_FAVORITE_ERROR", payload: error });
        }
    };
}

export const fetchFavoritesCurrency = () => {
    return async (dispatch) => {
        try {
            const response = await getIdsCurrency();
            dispatch({ type: "FETCH_FAVORITE_CURRENCIES_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "FETCH_FAVORITE_CURRENCIES_ERROR", payload: error });
        }
    };
}

export const addFavoriteCURRENCY = (id) => {
    return async (dispatch) => {
        try {
            await addNewIdCurrency(id);
            const response = await getIdsCurrency();
            dispatch({ type: "ADD_FAVORITE_CURRENCY_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "ADD_FAVORITE_CURRENCY_ERROR", payload: error });
        }
    };
}

export const removeFavoriteCurrency = (id) => {
    return async (dispatch) => {
        try {
            await removeIdCurrency(id);
            const response = await getIdsCurrency();
            dispatch({ type: "REMOVE_FAVORITE_CURRENCY_SUCCESS", payload: response });
        } catch (error) {
            dispatch({ type: "REMOVE_FAVORITE_CURRENCY_ERROR", payload: error });
        }
    };
}