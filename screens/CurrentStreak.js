import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function CurrentStreak() {
  const [daysSober, setDaysSober] = useState(0);

  useEffect(() => {
    const calculateDaysSober = async () => {
      const startDate = await AsyncStorage.getItem('startDate');
      if (startDate) {
        const start = new Date(startDate);
        const today = new Date();
        const difference = Math.floor((today - start) / (1000 * 60 * 60 * 24));
        setDaysSober(difference);
      }
    };

    calculateDaysSober();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <BlurView intensity={50} style={styles.blurContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Number of days</Text>
          <Text style={styles.days}>{daysSober}</Text>
        </View>
      </BlurView>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  days: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
