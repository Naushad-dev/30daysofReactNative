import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { circleRadius, Colors } from "../../../utils/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Audio } from "expo-av";
import PlaySound from "../../../utils/PlaySound";
const Water = () => {
  

  return (
    <TouchableOpacity style={styles.WaterCircle} onPress={()=>PlaySound('ting 2')}>
      <Ionicons name="water" color="#1ca3ec" size={RFValue(32)} />
    </TouchableOpacity>
  );
};

export default Water;

const styles = StyleSheet.create({
  WaterCircle: {
    backgroundColor: Colors.white,
    height: circleRadius,
    width: circleRadius,
    borderRadius: circleRadius,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 25,
  },
});
