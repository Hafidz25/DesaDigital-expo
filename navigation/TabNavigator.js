import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TokoStackNavigator, BarangStackNavigator, PromoStackNavigator, RiwayatStackNavigator } from "./StackNavigator";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render(){
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#EE4A4A',
                    tabBarInactiveTintColor: '#FFF',
                    tabBarStyle: {backgroundColor: '#f6e5e5'},
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500', color:'#000' },
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        if (route.name === 'Toko') {
                            iconName = focused
                            ? 'ellipse'
                            : 'ellipse';
                        } else if (route.name === 'Barang') {
                            iconName = focused
                            ? 'ellipse'
                            : 'ellipse';
                        } else if (route.name === 'Promo') {
                            iconName = focused
                            ? 'ellipse'
                            : 'ellipse';
                        } else if (route.name === 'Riwayat') {
                            iconName = focused
                            ? 'ellipse'
                            : 'ellipse';
                        } return <Icon name={iconName} size={21} color={color}/>;
                    },
                })}>
                <Tab.Screen name="Toko" component={TokoStackNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Barang" component={BarangStackNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Promo" component={PromoStackNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Riwayat" component={RiwayatStackNavigator} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }
};