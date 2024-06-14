import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddictionListScreen from './AddictionListScreen';

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome to Wellness.</Text>
          <Text style={styles.welcomeText}>Tell us what you are struggling with</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Select Your bad habit')}>
            <Text style={styles.buttonText}>+ Pick Addiction</Text>
          </TouchableOpacity>
          <Text style={styles.welcomeText}>We are dedicated to help you become better.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(192,192,192, 0.3)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
