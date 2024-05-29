import { StyleSheet, FlatList,TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import CurrencyItem from './CurrencyItem';
import CurrencyModel from '../models/CurrencyModel';


export default function CurrencyList(supportedCodes, currencyList ) {
  return (
    <FlatList
    data={currencyList}
    renderItem={({ item }) =>{
      return (
          <CurrencyItem item={item} />
      );
  }}
    keyExtractor={item => item}
>
  </FlatList>
  )
}

const styles = StyleSheet.create({})