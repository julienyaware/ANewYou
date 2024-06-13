import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const addictions = [
  { id: '1', name: 'Alcohol' },
  { id: '2', name: 'Smoking' },
  { id: '3', name: 'Gambling' },
  { id: '4', name: 'Drugs' },
];

export default function AddictionListScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={addictions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
        style={styles.calendar}
      />
      <Button
        title="Save"
        onPress={() => {
          alert('Addiction and start date saved!');
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
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
  },
  calendar: {
    marginVertical: 20,
  },
})