import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { BlurView } from 'expo-blur';

const backgroundImage = require('../assets/backgroundImage.jpg');


export default function OnlineTherapyScreen({ navigation }) {
  const openBetterHelp = () => {
    navigation.navigate('Better Help')
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <BlurView intensity={50} style={styles.blurContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Would you want better help?</Text>
          <TouchableOpacity style={styles.button} onPress={openBetterHelp}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

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
    backgroundColor: '#007BFF',
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
