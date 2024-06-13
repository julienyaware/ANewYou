import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
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
    
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoContainer}
            onPress={() => navigation.navigate('playVideo', { videoId: item.id.videoId })}
          >
            <Image
              style={styles.thumbnail}
              source={{ uri: item.snippet.thumbnails.medium.url }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  flatListContent: {
    paddingHorizontal: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6c4130',
  },
  thumbnail: {
    width: 120,
    height: 90,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export default SelfHelpVideoScreen;
