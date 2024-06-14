import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreens';
import ResetScreen from './ResetScreen';

const Tab = createBottomTabNavigator();


export default function SettingsScreen({ navigation }) {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Reset Streak" component={ResetScreen} />
      </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
})