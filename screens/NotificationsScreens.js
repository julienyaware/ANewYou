import React from 'react'
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();


export default function NotificationsScreen({ navigation }) {
    return (
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Button onPress={() => navigation.goBack()} title="Go back home" />
        // </View>
      );
}
