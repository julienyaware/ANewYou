import React from 'react'
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pick Addiction</Text>
          </TouchableOpacity>
          {/* <Button
          tyle={styles.text}
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        /> */}
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
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(192,192,192, 0.3)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});