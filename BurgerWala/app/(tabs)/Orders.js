import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { Colors } from "../../config/Colors";
import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomBTN from "../../Components/CustomBTN";
const Orders = () => {
  return (
    <View style={{ flex: 1, paddingTop: 35, marginHorizontal: 10 }}>
      <Stack.Screen options={{ headerShown: true }} />

      <View style={styles.itemWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images2/Burger1.png")}
            style={styles.itemImage}
          />
        </View>
        <View
          style={{
            marginLeft: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.brown,
              fontSize: 24,
              fontFamily: "Poppins_500Medium",
              fontWeight: "semibold",
            }}
          >
            Chees Burger{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="staro" size={14} color="orange" />
            <AntDesign name="staro" size={14} color="orange" />

            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginHorizontal: 5,
              }}
            >
              3.4
            </Text>
            <CustomBTN
              title={"Rate Now"}
              btnstyle={{ paddingVertical: 5, paddingHorizontal: 10 }}
              titleStyle={{ fontSize: 10 }}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.itemWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images2/Burger3.png")}
            style={styles.itemImage}
          />
        </View>
        <View
          style={{
            marginLeft: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.brown,
              fontSize: 24,
              fontFamily: "Poppins_500Medium",
              fontWeight: "semibold",
            }}
          >
            Chees Burger{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="staro" size={14} color="orange" />

            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginHorizontal: 5,
              }}
            >
              4.4
            </Text>
            <CustomBTN
              title={"Rate Now"}
              btnstyle={{ paddingVertical: 5, paddingHorizontal: 10 }}
              titleStyle={{ fontSize: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Orders;
const styles = StyleSheet.create({
  itemWrapper: {
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 0,
    },
   marginBottom:20
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3 / 4,
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
