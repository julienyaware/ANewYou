import React, { useState, useEffect, createContext, useContext } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import logo from './assets/logo.jpg';
import NotificationsScreens from './screens/NotificationsScreens'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SelfAffirmationScreen from './screens/SelfAffirmationScreen';
import SelfHelpVideoScreen from './screens/SelfHelpVideoScreen';
import PlayVideoScreen from './screens/PlayVideoScreen';
import CommunityChat from './screens/CommunityChat';
import AuthenticationProviderContext from './providers/AuthenticationProviderContext';
import OnlineTherapyScreen from './screens/OnlineTherapyScreen';
import BetterHelpScreen from './screens/BetterHelpScreen';
import PickDateScreen from './screens/PickDateScreen';
import SelectAddiction from './screens/SelectAddiction';
import CurrentStreak from './screens/CurrentStreak';
import ResetScreen from './screens/ResetScreen';
import registerNNPushToken from 'native-notify';
import { LogBox  } from 'react-native';



const Drawer = createDrawerNavigator();
LogBox.ignoreAllLogs();


export default function App() {
  registerNNPushToken(21911, '21AjVxE7XTr5CMFdLwMEka');
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
          <AuthenticationProviderContext>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Notifications" component={NotificationsScreens}
                options={{
                  drawerItemStyle: { display: 'none' }
                }} />
              <Drawer.Screen name="Login" component={LoginScreen} />
              <Drawer.Screen name="Select Start Date" component={PickDateScreen} />
              <Drawer.Screen name="Current Streak" component={CurrentStreak} />

              <Drawer.Screen name="Register" component={RegisterScreen} 
              options={{
                drawerItemStyle: { display: 'none' }
              }} />
              <Drawer.Screen name="Self Affirmation" component={SelfAffirmationScreen} />
              <Drawer.Screen name="Videos For Self-help" component={SelfHelpVideoScreen} />
              <Drawer.Screen name="Community Chat" component={CommunityChat} />
              <Drawer.Screen name="Online Therapy" component={OnlineTherapyScreen} />
              <Drawer.Screen name="Settings" component={SettingsScreen} />
              <Drawer.Screen name="Reset Streak" component={ResetScreen} 
              options={{
                drawerItemStyle: { display: 'none' }
              }} />
              <Drawer.Screen name="Better Help" component={BetterHelpScreen}
              options={{
                drawerItemStyle: { display: 'none' }
              }} />
              <Drawer.Screen name="Select Your bad habit" component={SelectAddiction}
                options={{
                  drawerItemStyle: { display: 'none' }
                }} />
              <Drawer.Screen name="Play Video" component={PlayVideoScreen}
                options={{
                  drawerItemStyle: { display: 'none' }
                }} />

            </Drawer.Navigator>
          </AuthenticationProviderContext>
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
