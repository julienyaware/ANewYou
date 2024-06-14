import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { useAuthentication } from '../providers/AuthenticationProviderContext';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const backgroundImage = require('../assets/backgroundImage.jpg');

const AuthenticationWrapper = (Component) => {
    const navigateToLogin = () => {
        navigation.navigate('Login')
      };

    return (props) => {
        const { user } = useAuthentication();
        const navigation = useNavigation();

        if (user === null) {
            return (
     <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <BlurView intensity={10} style={styles.blurContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>We must admit that we can't do it alone. That's why the wellness app is providing an anonymous chat platform so that you can talk to others who may have similar struggles.</Text>
          <View style={styles.button} >
            <Text style={styles.buttonText}>Head to the Login Screen to join the community.</Text>
          </View>
        </View>
      </BlurView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
            );
        }

        if (!user) {
            navigation.navigate('Login');
            return null;
        }

        return <Component {...props} />;
    };
};

export default AuthenticationWrapper;

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    blurContainer: {
      ...StyleSheet.absoluteFill,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#6c4130',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    backButton: {
      position: 'absolute',
      top: 40,
      right: 20,
    },
    backButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
