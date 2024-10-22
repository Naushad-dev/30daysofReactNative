import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";

import { Colors } from "../config/Colors";

const Header = () => {
  let [fontLoaded] = useFonts({
    Lobster_400Regular,
    Poppins_500Medium,
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text
          style={[
            {
              fontFamily: "Lobster_400Regular",
              fontSize: 45,
              color: Colors.brown,
            },
          ]}
        >
          FoodGo
        </Text>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/med/men/93.jpg" }}
          height={50}
          width={50}
          resizeMode="cover"
          style={{ marginRight: 15, borderRadius: 25 }}
        />
      </View>
      <View style={styles.tagLine}>
        <Text style={[{ fontSize: 18, fontFamily: "Poppins_500Medium" }]}>
          Order Your Favourite Food !
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 5,
    alignItems: "center",
    height: 61,
  },
  tagLine: {
    marginLeft: 10,
    textAlign: "center",
  },
});
