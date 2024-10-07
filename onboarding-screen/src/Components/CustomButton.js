import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const CustomButton = ({ handlePress, buttonValue }) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonValue.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ["#fd94b2", "#f8dac2", "#154f40"]
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const buttonAnimateStyle = useAnimatedStyle(() => {
    return {
      width:
        buttonValue.value === 2 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),
      height:
        buttonValue.value === 2 * SCREEN_HEIGHT
          ? withSpring(80)
          : withSpring(120),
    };
  });
  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 50,
      height: 50,
      opacity:
        buttonValue.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            buttonValue.value === 2 * SCREEN_HEIGHT
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonValue.value === 2 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            buttonValue.value === 2 * SCREEN_HEIGHT
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[styles.container, animatedColor, buttonAnimateStyle]}
      >
        <Animated.Text style={[styles.buttonText,textAnimationStyle]}>Get Started</Animated.Text>
        <Animated.Image style={arrowAnimationStyle} source={require("../../assets/images/ArrowIcon.png")} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    height: 120,
    width: 120,
    backgroundColor: "white",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    position: "absolute",
  },
});
