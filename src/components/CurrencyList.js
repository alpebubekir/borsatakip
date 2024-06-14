import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native'
import React from 'react'
import CurrencyItem from './CurrencyItem';
import CurrencyModel from '../models/CurrencyModel';


export default function CurrencyList({currencyList, favorites}) {
    return (
        <FlatList
            data={currencyList}
            renderItem={({item}) => {
                const isFavourite = favorites.includes(item.code);
                return (

                    <CurrencyItem item={item} isFavourite={isFavourite}/>
                );
            }}
            keyExtractor={item => item.code}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({})