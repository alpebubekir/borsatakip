import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useRoute } from '@react-navigation/native';

const CryptoDetailScreen = ({ navigation }) => {
    const route = useRoute();
    const crypto = route.params?.crypto;
    const [marketData, setMarketData] = useState(null);
    const [days, setDays] = useState(30);
    const [interval, setInterval] = useState('daily');

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=try&days=${days}&interval=${interval}`);
                const data = await response.json();
                if (data && data.prices) {
                    setMarketData(data);
                } else {
                    setMarketData(null);
                }
            } catch (error) {
                console.error("Error fetching market data: ", error);
                setMarketData(null);
            }
        };

        fetchMarketData();
    }, [crypto.id, days, interval]);

    const getPriceChangeColor = (change) => {
        return change >= 0 ? styles.positive : styles.negative;
    };

    const formatCurrency = (value) => {
        return value ? new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value) : 'Veri Yok';
    };

    const formatNumber = (value) => {
        return value ? value.toLocaleString() : 'Veri Yok';
    };

    const formatPercentage = (value) => {
        return value ? `${value.toFixed(2)}%` : 'Veri Yok';
    };

    const formatDateLabel = (timestamp) => {
        const date = new Date(timestamp);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('tr-TR', options);
    };

    const chartData = {
        labels: marketData ? marketData.prices.map(price => {
            return formatDateLabel(price[0]);
        }).filter((label, index) => index % 6 === 0) : [],
        datasets: [
            {
                data: marketData ? marketData.prices.map(price => price[1]).filter((_, index) => index % 3 === 0) : [], // Her 3. veri noktasını göstermek için
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#555555"
        }
    };

    return (
        <ScrollView style={styles.container}>
            {marketData ? (
                <LineChart
                    data={chartData}
                    width={Dimensions.get("window").width * 0.9}
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=" TL"
                    yAxisInterval={1}
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            ) : (
                <Text style={styles.errorText}>Veri yüklenemedi.</Text>
            )}
            <View style={styles.header}>
                {crypto.image ? (
                    <Image source={{ uri: crypto.image }} style={styles.image} />
                ) : (
                    <Text style={styles.noImage}>Görsel Yok</Text>
                )}
                <Text style={styles.title}>{crypto.name || 'İsim Yok'}</Text>
                <Text style={styles.symbol}>({crypto.symbol ? crypto.symbol.toUpperCase() : 'Sembol Yok'})</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Güncel Fiyat:</Text>
                <Text style={styles.value}>{formatCurrency(crypto.current_price)}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Piyasa Değeri:</Text>
                <Text style={styles.value}>{formatCurrency(crypto.market_cap)}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>24 Saatlik En Yüksek / En Düşük:</Text>
                <Text style={styles.value}>
                    {formatCurrency(crypto.high_24h)} / {formatCurrency(crypto.low_24h)}
                </Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>24 Saatlik Fiyat Değişimi:</Text>
                <Text style={[styles.value, getPriceChangeColor(crypto.price_change_24h)]}>
                    {formatCurrency(crypto.price_change_24h)} ({formatPercentage(crypto.price_change_percentage_24h)})
                </Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Tüm Zamanların En Yükseği:</Text>
                <Text style={styles.value}>
                    {formatCurrency(crypto.ath)} ({formatPercentage(crypto.ath_change_percentage)})
                </Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Dolaşımdaki Arz:</Text>
                <Text style={styles.value}>{formatNumber(crypto.circulating_supply)}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Toplam Arz:</Text>
                <Text style={styles.value}>{formatNumber(crypto.total_supply)}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.label}>Maksimum Arz:</Text>
                <Text style={styles.value}>{formatNumber(crypto.max_supply)}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    column: {
        width: Dimensions.get("window").width * 0.9,
        marginHorizontal: Dimensions.get("window").width * 0.05
    },
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    noImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        textAlign: 'center',
        lineHeight: 100,
        backgroundColor: '#e0e0e0',
        color: '#777'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    symbol: {
        fontSize: 18,
        color: '#666'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginVertical: 5
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap'
    },
    value: {
        fontSize: 16,
        flex: 1,
        textAlign: 'right'
    },
    positive: {
        color: 'green'
    },
    negative: {
        color: 'red'
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 18,
        marginVertical: 20
    }
});

export default CryptoDetailScreen;
