import { ScrollView, StyleSheet, Text, View,useWindowDimensions } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const App = () => {
const{height,width}= useWindowDimensions()
console.log("hight and widht", height,width);
const isPotrait= width >= height
console.log("Potrait hai",isPotrait);



  return (
    <View style={styles.container}>
      <View style={[styles.header,{height:isPotrait ? hp('5%'):hp('10%')}]}></View>
      <View style={styles.body}>
        <View style={[styles.section1]}></View>
        <View style={styles.section2}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              paddingHorizontal:10
            }}
          >
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
          </ScrollView>
        </View>
      </View>
      <View style={[styles.footer,{height:isPotrait ? hp('5%'):hp('10%')}]}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    backgroundColor: "green",
    height: hp("10%"),
  },
  body: {
    flex:1,
    backgroundColor: "red",
    flexDirection: "row",
  },
  section1: {
  flex:1,
    backgroundColor: "blue",
  },
  section2: {
    flex:3,
    // height:hp("100%"),
    backgroundColor: "gray",
  },
  box: {
    height: hp("20%"),
    width: wp("28%"),
    backgroundColor: "white",
    marginVertical:15,
    borderRadius:10,
    elevation:10
  },
  footer: {
    height: hp("10%"),
    backgroundColor: "yellow",
  },
});
