import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useState, useContext } from "react";
import { ThemeContext } from "../Context";
import { Colors } from "../Constant";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const TopBar = () => {
  const { theme, settheme } = useContext(ThemeContext);
  const [isday, setisday] = useState(true);

  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme === "light" ? Colors.white : Colors.dark },
      ]}
    >
      <TouchableOpacity
        style={{
          height: 41,
          width: 100,
          borderRadius: 30,
          borderWidth: 1,
          flexDirection: "row",
          paddingHorizontal: 5,
          paddingVertical: 4,
          backgroundColor: isday ? Colors.dark : Colors.white,
          borderColor: isday ? Colors.grey : Colors.dark,
          elevation: 20,
        }}
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withTiming(60, { duration: 400 });
            settheme(theme === "light" ? "dark" : "light");
            setisday(false);
          } else {
            animation.value = withTiming(0, { duration: 400 });
            setisday(true);
            settheme(theme === "dark" ? "light" : "dark");
          }
        }}
      >
        <Animated.View
          style={[
            {
              height: 40,
              width: 40,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            },
            animatedStyle,
          ]}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
              backgroundColor: Colors.grey,
              position:'relative'
            }}
          ></View>
          {isday ? (
            <MaterialIcons name="mode-night" size={30} color={Colors.blue} style={{position:'absolute' , right:-50}}/>
          ) : (
            <Fontisto name="day-sunny" size={25} color={Colors.blue} style={{position:"absolute", right:70, top:4}}/>
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: 10,
    paddingTop: 20,
  },
});
