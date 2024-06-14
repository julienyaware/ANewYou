import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require('../assets/backgroundImage.jpg');
const addictionsList = ['Alcohol', 'Drugs', 'Gambling', 'Procrastination', 'Social Media', 'Smoking', 'Other'];

export default function SelectAddiction({ navigation }) {
  const [selectedAddictions, setSelectedAddictions] = useState([]);

  const handleSelect = (addiction) => {
    setSelectedAddictions(prevState =>
      prevState.includes(addiction)
        ? prevState.filter(item => item !== addiction)
        : [...prevState, addiction]
    );
  };

  const handleSave = async () => {
    await AsyncStorage.setItem('addictions', JSON.stringify(selectedAddictions));
    navigation.navigate('Pick A Date');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.card}>
          <Text style={styles.title}>Select Your Addictions</Text>
          <FlatList
            data={addictionsList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedAddictions.includes(item) && styles.selectedItem
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Save and Continue" onPress={handleSave} />
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
  card: {
    width: 300,
    padding: 5,
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
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  selectedItem: {
    backgroundColor: '#d3d3d3',
  },
});
