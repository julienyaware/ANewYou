import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, FlatList, ImageBackground } from 'react-native';
import axios from 'axios';
import { BlurView } from 'expo-blur';

const backgroundImage = require('../assets/backgroundImage.jpg');

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SelfAffirmationScreen = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://zenquotes.io/api/quotes');
        setQuotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuotes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>"{item.q}"</Text>
      <Text style={styles.authorText}>- {item.a}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <BlurView intensity={50} style={styles.blurContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Swipe next to see the next quote</Text>
      </View>
      <FlatList
        data={quotes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
    </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: viewportWidth,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteContainer: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: viewportWidth * 0.9, 
    height: viewportHeight * 0.6, 
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#331800',
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#331800', 
  },
});

export default SelfAffirmationScreen;
