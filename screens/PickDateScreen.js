import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require('../assets/backgroundImage.jpg');


export default function PickDateScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSave = async () => {
    await AsyncStorage.setItem('startDate', date.toISOString());
    navigation.navigate('Current Streak');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      
    <View style={styles.container}>
      
        <View style={styles.card}>
          <Text style={styles.title}>Select Your Start Date</Text>
          <Button onPress={showDatepicker} title="Show Date Picker" />
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          <Button title="Save and Continue" onPress={handleSave} />
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
});
