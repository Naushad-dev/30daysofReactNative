import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodList from "../../Components/FoodList";
import { Stack } from "expo-router";
import { Colors } from "../../config/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated from "react-native-reanimated";
const Favourite = () => {
  return (
    <View style={{ paddingTop: 45 }}>
      <Stack.Screen options={{ headerShown: true , title:"Favourite's"}} />
      <View style={{marginHorizontal:10, flexDirection:"row"}}>
        <Pressable style={styles.CardContainer}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
            }}
          >
            <Animated.Image
              source={require("../../assets/images2/Burger1.png")}
              //  source={image}
              style={styles.foodImage}
              resizeMode="contain"
            />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_500Medium",
                color: Colors.brown,
              }}
            >
              Classic Burger
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_500Medium",
                color: Colors.gray,
              }}
            >
              4.4 <AntDesign name="star" size={14} color="orange" />
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Poppins_500Medium",
                  color: Colors.brown,
                }}
              >
                120 ₹
              </Text>
              <AntDesign
                name="heart"
                size={24}
                color={Colors.red}
                style={{ marginRight: 20 }}
              />
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.CardContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
          }}
        >
          <Animated.Image
            source={require("../../assets/images2/Burger1.png")}
            //  source={image}
            style={styles.foodImage}
            resizeMode="contain"
          />
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_500Medium",
              color: Colors.brown,
            }}
          >
            Big Mac
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_500Medium",
              color: Colors.gray,
            }}
          >
            4.4 <AntDesign name="star" size={14} color="orange" />
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Poppins_500Medium",
                color: Colors.brown,
              }}
            >
              120 ₹
            </Text>
            <AntDesign
              name="heart"
              size={24}
              color={Colors.red}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
      </Pressable>
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  CardContainer: {
    width: 165,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { height: 6, width: 6 },
    shadowOpacity: 0.6,
    padding: 2,
    shadowRadius: 10,
    margin: 10,
  },
  foodImage: {
    height: 121,
    width: 120,
    alignContent: "center",
  },
});
