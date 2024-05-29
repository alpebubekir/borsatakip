import React, { useEffect } from 'react';
import CryptoList from '../components/CryptoList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../redux/actions/favoriteActions';

function FavoriteTab() {
    const dispatch = useDispatch();
    const favoriteCryptoIds = useSelector(state => state.favorites.favorites);
    const allCryptos = useSelector(state => state.crypto.crypto);


    console.log(allCryptos);
    useEffect(() => {
        dispatch(fetchFavorites());
    }, [dispatch]);
    console.log('allCryptos:', allCryptos); // Log to check if this is an array
    console.log('favoriteCryptoIds:', favoriteCryptoIds); // Log to check if this is an array

    const favoriteCryptos = Array.isArray(allCryptos) ? allCryptos.filter(crypto => favoriteCryptoIds.includes(crypto.id)) : [];


    return (
        <CryptoList
            list={favoriteCryptos}
            loadMore={() => { }}
            favorites={favoriteCryptoIds} // Pass favorite IDs to CryptoList
        />
    );
}

export default FavoriteTab;
