import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/favoriteActions';

export default function CryptoItem({ item, isFavourite }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('CryptoDetailScreen', { crypto: item });
            }}>
            <View style={styles.itemContainer}>
                <View style={styles.horizontalView}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <View style={styles.horizontalView}>
                            <Text style={styles.title}>{item.name}</Text>
                            <View style={{ width: 10 }} />
                            <TouchableOpacity
                                onPress={() => {
                                    if (isFavourite) {
                                        dispatch(removeFavorite(item.id));
                                    } else {
                                        dispatch(addFavorite(item.id));
                                    }
                                }}>
                                <Ionicons name={'star'} size={20} color={isFavourite ? '#FFD700' : '#939393'} />
                            </TouchableOpacity>
                        </View>
                        <Text>{item.symbol.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.title}>{item.current_price} ₺</Text>
                    <Text style={item.price_change_percentage_24h < 0 ? styles.redText : styles.greenText}>
                        %{item.price_change_percentage_24h}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 8,
        shadowColor: '#555555',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    horizontalView: {
        flexDirection: 'row',
    },
    nameContainer: {
        justifyContent: 'space-between',
    },
    priceContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    redText: {
        color: 'red',
    },
    greenText: {
        color: 'green',
    },
    title: {
        fontSize: 16,
    },
});
