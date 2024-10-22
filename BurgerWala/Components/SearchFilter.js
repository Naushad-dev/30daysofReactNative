import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "../config/Colors";
const SearchFilter = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.searchContainer]}>
        <AntDesign
          name="search1"
          size={24}
          color={Colors.brown}
          style={styles.searchBtn}
        />
        <TextInput placeholder="Search.." style={[styles.Input]} />
      </View>

      <Pressable style={[styles.filterbtn]}>
        <FontAwesome6 name="sliders" size={24} color={Colors.white} />
      </Pressable>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 25,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    borderRadius: 15,
    elevation: 6, 
    shadowColor: "#000", 
    shadowOffset: { width: 10, height: 15 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 15,
    marginLeft: 5,
  },
  Input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 18,
    alignItems: "center",
    marginLeft: 30,
    borderRadius: 15,
  },
  searchBtn: {
    marginRight: 5,
    position: "absolute",
    left: 10,
    color: Colors.gray,
  },
  filterbtn: {
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: Colors.red,
    borderRadius: 15,
    marginRight: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});
