import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const Accordian = ({ children }) => {
  const [expanded, setexpanded] = useState(false);
  const height = useSharedValue(0);

  const toggleAccordian = () => {
    setexpanded(!expanded);
    height.value = expanded
      ? withTiming(0, { duration: 300 })
      : withTiming(150, { duration: 300 });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });
  return (
    <Pressable
      onPress={toggleAccordian}
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginHorizontal: 15,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: "white",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 22,
            fontWeight: "semibold",
          }}
        >
          Account
        </Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </View>
      <Animated.View style={[styles.body, animatedStyle]}>
        <View style={styles.userDetailContainer}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              Name:
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              {" "}
              Naushad Khan
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              Email:
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              nausad@gmail.com
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                fontWeight: "semibold",
              }}
            >
              {" "}
              Mh421302
            </Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  accordianContainer: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {
    overflow: "hidden",
    backgroundColor: "white",
  },
  userDetailContainer: {
    gap: 10,
  },
});
