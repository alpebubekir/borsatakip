import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    addFavorite,
    addFavoriteCURRENCY,
    removeFavorite,
    removeFavoriteCurrency
} from "../redux/actions/favoriteActions";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";

export default function CurrencyItem({ item, isFavourite }) {

    const dispatch = useDispatch();
    return (
        <View style={styles.itemContainer}>
            <View style={styles.horizontalView} >
                <Image
                    source={{ uri: `https://wise.com/public-resources/assets/flags/rectangle/${item.code.toLowerCase()}.png` }}
                    style={styles.image}
                />
                <View style={styles.nameContainer}>
                    <View style={styles.horizontalView} >
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={{width: 10}}/>
                        <TouchableOpacity
                            onPress={() => {
                                if (isFavourite) {
                                    dispatch(removeFavoriteCurrency(item.code));
                                } else {
                                    dispatch(addFavoriteCURRENCY(item.code));
                                }
                            }}>
                            <Ionicons name={'star'} size={20} color={isFavourite ? '#FFD700' : '#939393'}/>
                        </TouchableOpacity>
                    </View>
                    <Text>{item.code}</Text>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.title} >{(1 / item.rate).toFixed( (1 /  item.rate) < 0.001 ? 5:3)} ₺</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 8,
        shadowColor: "#555555",
        justifyContent: "space-between",
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight:10,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1
    },
    horizontalView: {
        flexDirection: "row"

    },
    nameContainer:{
        justifyContent:"space-between"
    },
    priceContainer: {
        alignItems: "flex-end",
        justifyContent:"space-between"
    },
    redText: {
        color: "red"
    },
    greenText: {
        color: "green"
    },
    title: {
        fontSize: 16,
    },
})