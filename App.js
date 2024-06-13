import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import logo from './assets/logo.jpg';
import NotificationsScreens from './screens/NotificationsScreens'
import AddictionListScreen from './screens/AddictionListScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SelfAffirmationScreen from './screens/SelfAffirmationScreen';
import SelfHelpVideoScreen from './screens/SelfHelpVideoScreen';
import PlayVideoScreen from './screens/PlayVideoScreen';
import CommunityChat from './screens/CommunityChat';

const Drawer = createDrawerNavigator();

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000); 
  }, []);

  return (
    <View style={styles.container}>
      {splashScreenVisible ? (
        <View style={styles.splashContainer}>
          <Image source={logo} style={styles.splashImage} />
        </View>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreens} />
            <Drawer.Screen name="AddictionList" component={AddictionListScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="SelfAffirmation" component={SelfAffirmationScreen} />
            <Drawer.Screen name="SelfHelpVideos" component={SelfHelpVideoScreen} />
            <Drawer.Screen name="CommunityChat" component={CommunityChat} />
            <Drawer.Screen name="playVideo" component={PlayVideoScreen}
             options={{
              drawerItemStyle: { display: 'none' }
    }} />

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
    backgroundColor: '#331800', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});
