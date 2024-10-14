import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { icons } from "../config/Icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const TabButton = ({ label, onPress, isFocused, routeName, color }) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 800 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);

    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      //styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    const opacityValue = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity: opacityValue,
    };
  });

  return (
    <Pressable style={styles.tab} onPress={onPress}>
     
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({
          color: color,
          size: isFocused ? 24 : 18,
        })}
      </Animated.View>
      <Animated.Text
        style={[
          {
            color: color,
            fontSize: 14,
          },
          animatedText,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});
