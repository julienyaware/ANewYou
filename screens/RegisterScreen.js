import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function ResetScreen({ navigation }) {
  const handleReset = async () => {
    await AsyncStorage.removeItem('startDate');
    navigation.navigate('Current Streak', { reset: true });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <BlurView intensity={10} style={styles.blurContainer}>
        <View style={styles.container}>
          <Text style={styles.descriptionText}>We all make mistakes. Don't be so hard on yourself.</Text>
          <Text style={styles.descriptionText}>Would you like to reset your current streak?</Text>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset Streak</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>Every sunset is an opportunity to reset.</Text>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(192,192,192, 0.3)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
  },
  blurContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
});
