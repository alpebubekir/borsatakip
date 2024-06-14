import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CryptoTab from '../tabs/CryptoTab';
import CurrencyTab from '../tabs/CurrencyTab';
import FavoriteTab from "../tabs/FavoriteTab";

const Tab = createMaterialTopTabNavigator();


export default function NavigationTabBar( ) {
  return (
      <Tab.Navigator 
            screenOptions={() => ({
                headerShown : false,
                tabBarStyle: {height:50,},
                tabBarInactiveTintColor:"#000000",
            
            })}>

      <Tab.Screen name="Kripto" component={CryptoTab}
            options={() => ({
                tabBarLabel: 'Kripto', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#FFDEDD',
                tabBarActiveTintColor:"black",
                headerTitle: 'Kripto',
            })}/>
          <Tab.Screen name="Döviz" component={CurrencyTab}
                      options={() => ({
                          tabBarLabel: 'Döviz', // Metin belirleme
                          tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                          tabBarActiveBackgroundColor: '#FFDEDD',
                          tabBarActiveTintColor:"black",
                          headerTitle: 'Döviz',
                      })}/>
      <Tab.Screen name="Favoriler" component={FavoriteTab}
            options={() => ({
                tabBarLabel: 'Favoriler', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#FFDEDD',
                tabBarActiveTintColor:"black",
            })}/>
    </Tab.Navigator>
  )
}

const styles = (focused) => StyleSheet.create({
    iconImage : {
        width : 20,
        height : 20,
        color: "black",
        tintColor : focused? "blue" : "black",
    },
})