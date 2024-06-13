// VideoListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { YT_Key } from '../api/YoutubeApiKey';

const SelfHelpVideoScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const url = 'https://www.googleapis.com/youtube/v3/search';
      const params = {
        part: 'snippet',
        q: 'breaking addictions',
        type: 'video',
        key: `${YT_Key}`,
        maxResults: 20,
      };

      try {
        const response = await axios.get(url, { params });
        setVideos(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error fetching videos: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id.videoId}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.videoContainer}
          onPress={() => navigation.navigate('playVideo', { videoId: item.id.videoId })}
        >
          <Text style={styles.videoTitle}>{item.snippet.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  videoContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  videoTitle: {
    fontSize: 16,
  },
});

export default SelfHelpVideoScreen;
