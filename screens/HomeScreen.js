import React from 'react'
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
      );
}
