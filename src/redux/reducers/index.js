import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer.js';
import currencyReducer from './currencyReducer.js';
import favoriteReducer from "./favoriteReducer";


export default combineReducers({
    crypto: cryptoReducer,
    currency: currencyReducer,
    favorites: favoriteReducer
});