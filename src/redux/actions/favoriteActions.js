import {addNewId, getIds, removeId} from "../../utils/storage";

export const fetchFavorites = () => {
    return async (dispatch) => {
        try {
            const response = await getIds();
            console.log(response);
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