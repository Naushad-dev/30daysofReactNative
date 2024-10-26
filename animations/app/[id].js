import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Animated from "react-native-reanimated";

const cities = [
  {
    id: 1,
    city: "New York",
    country: "USA",
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    city: "Paris",
    country: "France",
    image:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    city: "Tokyo",
    country: "Japan",
    image:
      "https://images.pexels.com/photos/158827/pexels-photo-158827.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    image:
      "https://images.pexels.com/photos/34632/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    city: "Sydney",
    country: "Australia",
    image:
      "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    city: "Berlin",
    country: "Germany",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    city: "Toronto",
    country: "Canada",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    city: "Dubai",
    country: "UAE",
    image:
      "https://images.pexels.com/photos/2624688/pexels-photo-2624688.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    city: "Rio de Janeiro",
    country: "Brazil",
    image:
      "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    city: "Cape Town",
    country: "South Africa",
    image:
      "https://images.pexels.com/photos/1036456/pexels-photo-1036456.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function CityDetails() {
  // Get params passed from the previous screen
  const { id } = useLocalSearchParams();
//   console.log("city id", id);

  const City = cities.find((c) => c.id == id);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: City.image }}
        style={styles.image}
        sharedTransitionTag={`image-${City.id}`}
      />
      <Text style={styles.cityName}>{City.city}</Text>
      <Text style={styles.country}>{City.country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
alignItems:"center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  country: {
    fontSize: 18,
    color: "gray",
  },
});
