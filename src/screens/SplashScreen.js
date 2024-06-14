import React, {useEffect} from 'react';
import {Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'NavigationTabBar' }],
            });  
        }, 2000);

        // Cleanup timer if component unmounts before timeout
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:"white"}}>
            <Image source={require('../../assets/app_logo.png')} style={{width: 200, height: 200}}/>
        </View>
    );
}

export default SplashScreen;
