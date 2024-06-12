import React from 'react'
import { View, Text, Button, ImageBackground, StyleSheet  } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const backgroundImage = require('../assets/backgroundImage.jpg');

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.text}>This is your content</Text>
          <Button
          tyle={styles.text}
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
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
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});