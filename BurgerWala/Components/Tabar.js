import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import { Colors } from "../config/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TabButton from "./TabButton";
import Animated, {

  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";

function CustomTabBar({ state, navigation, scrollY }) {
  const selectedColor = Colors.white;
  const unSelectedColor = Colors.brown;
  const [dimensions, setdimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;
  const tabPositionX = useSharedValue(0);

  const onTabbarLayout = (LayoutChangeEvent) => {
    setdimensions({
      height: LayoutChangeEvent.nativeEvent.layout.height,
      width: LayoutChangeEvent.nativeEvent.layout.width,
    });
  };

  const animatedStyel = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const hideTabbar = useAnimatedStyle(() => {
    // console.log("scroll value", scrollY.value);

    const translateY = interpolate(scrollY.value, [0, 100], [0, 100]);

    return {
      transform: [
        {
          translateY: withClamp(
            { min: 0, max: 100 },
            withTiming(translateY, { duration: 200 })
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[styles.tabbar, hideTabbar]}
      onLayout={onTabbarLayout}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: Colors.white,
            height: dimensions.height - 25,
            width: buttonWidth - 25,
            borderRadius: 35,
            marginHorizontal: 12,
          },
          animatedStyel,
        ]}
      ></Animated.View>
      {state.routes.map((route, index) => {
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 800,
          });
        };

        return (
          <TabButton
            key={route.name}
            style={styles.tab}
            onPress={onPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? unSelectedColor : selectedColor}
            label={label}
          />
        );

        // return (
        //   <TouchableOpacity
        //     key={route.name}
        //     onPress={onPress}
        //     style={styles.tab}
        //   >
        //     {icons[route.name]({
        //       color: isFocused ? selectedColor : unSelectedColor,
        //       size: isFocused ? 28 : 24,
        //     })}
        //     <Text
        //       style={{
        //         color: isFocused ? selectedColor : unSelectedColor,
        //         fontSize: 11,
        //       }}
        //     >
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
        // );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    backgroundColor: Colors.red,
    position: "absolute",
    bottom: 25,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: Colors.brown,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
});

export default CustomTabBar;
