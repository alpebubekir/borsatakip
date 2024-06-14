import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoList from '../components/CryptoList';
import { fetchCrypto } from '../redux/actions/cryptoActions';
import { fetchFavorites } from '../redux/actions/favoriteActions';

export default function CryptoTab() {
    const dispatch = useDispatch();
    const cryptoState = useSelector(state => state.crypto);
    const favoriteState = useSelector(state => state.favorites);
    const { crypto, loading, error } = cryptoState;
    const { favorites } = favoriteState;
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchCrypto(page));
        dispatch(fetchFavorites()); // Fetch favorites when the component mounts
    }, [dispatch, page]);

    const loadMore = () => {
        if (!loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    if (loading && page === 1) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    /*if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }*/

    return (
        <View style={{ flex: 1 }}>
            <CryptoList list={crypto} favorites={favorites} loadMore={loadMore} />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
});
