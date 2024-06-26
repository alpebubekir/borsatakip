import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTabBar from './src/NavigationTabBar/NavigationTabBar';
import CryptoDetailScreen from './src/screens/CryptoDetailScreen';
import {Provider} from "react-redux";
import store from "./src/redux/store";
import CryptoList from "./src/components/CryptoList";
import CryptoTab from "./src/tabs/CryptoTab";
import SplashScreen from "./src/screens/SplashScreen";


const Stack = createStackNavigator();

function ScreenOverView({navigation}) {
    return (

        <SplashScreen></SplashScreen>
        //<NavigationTabBar></NavigationTabBar>


    );
}

export default function App() {

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.safeArea}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="Navigat"
                            component={ScreenOverView}
                        />
                        <Stack.Screen
                            name='CryptoDetailScreen'
                            component={CryptoDetailScreen}
                        />
                        <Stack.Screen name="NavigationTabBar" component={NavigationTabBar}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
});
