import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import logo from './assets/logo.jpg';
import NotificationsScreens from './screens/NotificationsScreens'

const Drawer = createDrawerNavigator();

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    // Simulate splash screen duration
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
      {splashScreenVisible ? (
        // Show splash screen
        <View style={styles.splashContainer}>
          <Image source={logo} style={styles.splashImage} />
        </View>
      ) : (
        // Hide splash screen and show app content
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreens} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff', // Set a background color for the splash screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});
