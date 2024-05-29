import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CurrencyItem({ item }) {
    return (
        <TouchableOpacity
            onPress={
                () => {
                    console.log("abcd");
                }
            }>
            <View style={styles.itemContainer}>
                <View style={styles.horizontalView} >
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={styles.image}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{item.Name}</Text>
                        <Text>{item.ShortName}</Text>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.title} >{item} ₺</Text>

                </View>

            </View>
        </TouchableOpacity>
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
        marginRight:10
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