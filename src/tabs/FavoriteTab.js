import React, {useEffect} from 'react';
import CryptoList from '../components/CryptoList';
import CurrencyList from '../components/CurrencyList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavorites} from '../redux/actions/favoriteActions'; // Make sure fetchFavorites also fetches favorite currencies
import {FlatList, Text, View} from 'react-native';

function FavoriteTab() {
    const dispatch = useDispatch();
    const favoriteCryptoIds = useSelector(state => state.favorites.favorites);
    const favoriteCurrencyIds = useSelector(state => state.favorites.favoriteCurrencies);
    const allCryptos = useSelector(state => state.crypto.crypto);
    const allCurrencies = useSelector(state => state.currency.currency);

    useEffect(() => {
        dispatch(fetchFavorites());
    }, [dispatch]);

    const favoriteCryptos = Array.isArray(allCryptos) ? allCryptos.filter(crypto => favoriteCryptoIds.includes(crypto.id)) : [];
    const favoriteCurrencies = Array.isArray(allCurrencies) ? allCurrencies.filter(currency => favoriteCurrencyIds.includes(currency.code)) : [];

    console.log(favoriteCryptoIds);
    return (
        <View style={{flex: 1}}>
            <FlatList data={
                [favoriteCryptos, favoriteCurrencies]
            } renderItem={
                ({item}) => {
                    if (item.length === 0) {
                        return null;
                    }
                    if (item[0].current_price) {
                        return (<View>
                            <Text style={{paddingHorizontal:20, fontSize: 18, fontWeight: "bold",paddingTop:10}} >Kripto</Text>
                            <CryptoList list={item} favorites={favoriteCryptoIds} loadMore={() => {
                            }}/>
                        </View>);
                    } else {
                        return (<View>
                            <Text style={{paddingHorizontal:20, fontSize: 18, fontWeight: "bold",paddingTop:10}}>Döviz</Text>
                            <CurrencyList currencyList={item} favorites={favoriteCurrencyIds}/>

                        </View>);
                    }
                }
            }/>
        </View>
    );
}

export default FavoriteTab;
