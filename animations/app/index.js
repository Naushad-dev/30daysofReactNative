import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';
import Animated from 'react-native-reanimated'

// Sample Data
const cities = [
  {
    id: 1,
    city: "New York",
    country: "USA",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    city: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    city: "Tokyo",
    country: "Japan",
    image: "https://images.pexels.com/photos/158827/pexels-photo-158827.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/34632/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    city: "Sydney",
    country: "Australia",
    image: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    city: "Berlin",
    country: "Germany",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    city: "Toronto",
    country: "Canada",
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    city: "Dubai",
    country: "UAE",
    image: "https://images.pexels.com/photos/2624688/pexels-photo-2624688.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    city: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    city: "Cape Town",
    country: "South Africa",
    image: "https://images.pexels.com/photos/1036456/pexels-photo-1036456.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// FlatList Render Item
const renderItem = ({ item }) => (
  <Link asChild href={`/${item.id}`}>
  <Pressable style={styles.card}>
    <Animated.Image source={{ uri: item.image }} style={styles.image} 
    sharedTransitionTag={`image-${item.id}`}
    />
    <Text style={styles.cityName}>{item.city}</Text>
    <Text style={styles.country}>{item.country}</Text>
  </Pressable>
  </Link>
);

export default function CityGrid() {
  return (
    <FlatList
      data={cities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}  // Set 2 columns for grid layout
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    flexGrow:1,
    justifyContent:"center"
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5, // Small margin between items
    flex: 1,   // Take up equal space in the grid
    elevation: 2, // for android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  }
});
