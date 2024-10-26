import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../config/Colors";
import { Link, useRouter } from "expo-router";
import Animated from "react-native-reanimated";

const FoodCard = ({ data }) => {
  const { image, name, price, rating, id } = data;
  const [imageURL, setimageURL] = useState(image);
  // console.log(`sharedTag${id}`);

  const router = useRouter();
  // console.log(imageURL);

  return (
    <Link
      asChild
      href={{
        pathname: "/[productDetail]",
        params: data,
      }}
    >
      <Pressable style={styles.CardContainer}>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 2 }}
        >
          <Animated.Image
            // source={require('../assets/images2/Burger1.png')}
            sharedTransitionTag={`sharedTag${id}`}

            source={image}
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
            {name}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_500Medium",
              color: Colors.gray,
            }}
          >
            {rating} <AntDesign name="star" size={14} color="orange" />
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
              {price} ₹
            </Text>
            <AntDesign
              name="hearto"
              size={24}
              color={Colors.brown}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default FoodCard;

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
