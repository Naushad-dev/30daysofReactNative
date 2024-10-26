import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../config/Colors";
import { useSharedValue } from "react-native-reanimated";
import Slider from "@react-native-community/slider";
import CustomBTN from "../Components/CustomBTN";
import { useNavigation } from "expo-router";
import Animated from "react-native-reanimated";

// import { ColorProperties } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const ProductDetails = ({ route, navigation }) => {
  const { id, name, description, price, image, ingredients, rating } =
    useLocalSearchParams();
  console.log(`sharedTag${id}`);
  // console.log(typeof ingredients);
  const navigate = useNavigation();
  const handlePlaceOrder = () => {
    navigate.navigate("Cart");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 10,
        marginHorizontal: 10,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
          headerRight: () => (
            <AntDesign
              name="search1"
              size={24}
              color={Colors.brown}
              style={{
                paddingRight: 10,
                color: Colors.gray,
              }}
            />
          ),
        }}
      />
      <View style={styles.imageContainer}>
        <Animated.Image
          source={image}
          style={styles.image}
          resizeMode="contain"
          sharedTransitionTag={`sharedTag${id}`}
        />
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <AntDesign name="star" size={14} color="orange" />
            <Text
              style={{
                color: Colors.gray,
                fontFamily: "Poppins_500Medium",
                fontWeight: "200",
                paddingLeft: 4,
              }}
            >
              {rating}
            </Text>
            <Text
              style={{ color: Colors.gray, fontWeight: 200, marginLeft: 10 }}
            >
              - 26 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginVertical: 7,
              paddingVertical: 5,
            }}
          >
            {ingredients?.split(",").map((i, index) => (
              <Text
                key={index}
                style={{
                  margin: 1,
                  backgroundColor: "#F3F8F9",
                  color: Colors.gray,
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  paddingVertical: 4,
                  opacity: 0.7,
                }}
              >
                {i}
              </Text>
            ))}
          </View>
        </View>
        <View
          style={{
            padding: 5,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 100,
              fontFamily: "Poppins_500Medium",
              color: Colors.gray,
            }}
          >
            {description}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <View style={{ padding: 4 }}>
          <Text
            style={{
              color: Colors.brown,
              fontSize: 14,
              fontWeight: "semibold",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Spicy
          </Text>
          <View>
            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.red}
              maximumTrackTintColor={Colors.red}
              style={{ height: 25, width: 150 }}
              thumbImage={require("../assets/fire3.png")}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "green",
                fontFamily: "Poppins_500Medium",
              }}
            >
              Mild
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: Colors.red,
                fontFamily: "Poppins_500Medium",
              }}
            >
              Hot
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: Colors.brown,
              fontSize: 14,
              fontWeight: "semibold",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <CustomBTN
              title={"-"}
              btnstyle={{
                marginHorizontal: 4,
                paddingVertical: 14,
                paddingHorizontal: 22,
              }}
            />
            <Text
              style={{ marginHorizontal: 4, fontSize: 16, fontWeight: "bold" }}
            >
              0
            </Text>
            <CustomBTN
              title={"+"}
              btnstyle={{
                marginHorizontal: 4,
                paddingVertical: 14,
                paddingHorizontal: 22,
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          width: "100%",
          bottom: 20,
        }}
      >
        <CustomBTN
          title={`${price} ₹`}
          titleStyle={{ fontFamily: "Poppins_500Medium", fontWeight: "bold" }}
        />
        <CustomBTN
          onPress={handlePlaceOrder}
          title="ORDER NOW"
          btnstyle={{ backgroundColor: Colors.brown, paddingHorizontal: 55 }}
          titleStyle={{
            color: "white",
            fontFamily: "Poppins_500Medium",
            fontWeight: "bold",
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  titleContainer: {
    width: "100%",
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "semibold",
    fontFamily: "Poppins_500Medium",
  },
});
