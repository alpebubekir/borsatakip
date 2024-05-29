import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import CryptoItem from './CryptoItem';

export default function CryptoList({ list, favorites, loadMore }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={list}
                renderItem={({ item }) => {
                    const isFavourite = favorites.includes(item.id); // Check if item is a favorite
                    return (
                        <CryptoItem item={item} isFavourite={isFavourite} />
                    );
                }}
                keyExtractor={item => item.id}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
