import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function ResetScreen({ navigation }) {
  const handleReset = async () => {
    await AsyncStorage.removeItem('startDate');
    navigation.navigate('Current Streak');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Reset Your Streak</Text>
          <Button title="Reset Streak" onPress={handleReset} />
        </View>
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
  backgroundImage: {
    flex: 1,
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
});
