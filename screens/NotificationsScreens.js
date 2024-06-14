import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { getNotificationInbox } from 'native-notify';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';


const Tab = createBottomTabNavigator();


export default function NotificationsScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let notifications = await getNotificationInbox(21911, '21AjVxE7XTr5CMFdLwMEka');
    console.log("notifications: ", notifications);
    setData(notifications);
}, []);

const renderItem = ({ item }) => {
  return (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.body}>{item.message}</Text>
    <Text style={styles.body}>{item.date}</Text>

  </View>
);
}

    return (
      <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.notification_id.toString()}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Notifications</Text>
        )}
      />
      
      </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
})