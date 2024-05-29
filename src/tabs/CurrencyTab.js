import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import CurrencyList from '../components/CurrencyList'
import {useDispatch, useSelector} from "react-redux";
import {fetchExchangeRate, fetchSupportedCodes} from "../redux/actions/currencyActions";

export default function CurrencyTab() {

  const supportedCodes = useSelector(state => state.currency.supportedCodes);
  const currency = useSelector(state => state.currency.currency);
  const dispatch = useDispatch();

  console.log("dsadasdasd");
  console.log(currency);


  useEffect(() => {
    //dispatch(fetchSupportedCodes());
    dispatch(fetchExchangeRate());
  }, [supportedCodes, currency]);


  return (
    <CurrencyList
        currencyList={currency}
        supportedCodes={supportedCodes}
    ></CurrencyList>
  )
}

const styles = StyleSheet.create({})