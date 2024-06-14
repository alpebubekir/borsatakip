import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import CurrencyList from '../components/CurrencyList';
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangeRate, fetchSupportedCodes } from "../redux/actions/currencyActions";
import { fetchFavoritesCurrency } from "../redux/actions/favoriteActions";

export default function CurrencyTab() {
  const currency = useSelector(state => state.currency.currency);
  const dispatch = useDispatch();
  const favoriteState = useSelector(state => state.favorites.favoriteCurrencies);


  useEffect(() => {
    dispatch(fetchExchangeRate());
    dispatch(fetchFavoritesCurrency());
  }, [dispatch]);


  return (
      <CurrencyList
          currencyList={currency}
          favorites={favoriteState}
      />
  );
}

const styles = StyleSheet.create({});
