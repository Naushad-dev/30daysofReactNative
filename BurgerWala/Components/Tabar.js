import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../config/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
function CustomTabBar({ state, descriptors, navigation }) {
  const selectedColor = Colors.white;
  const unSelectedColor = Colors.brown;

  const icons = {
    index: (props) => (
      <AntDesign name="home" size={24} color="black" {...props} />
    ),
    Orders: (props) => (
      <MaterialIcons
        name="delivery-dining"
        size={24}
        color="black"
        {...props}
      />
    ),
    chats: (props) => (
      <Ionicons name="chatbubble-outline" size={24} color="black" {...props} />
    ),
    profile: (props) => (
      <AntDesign name="user" size={24} color="black" {...props} />
    ),
  };
  return (
    <View style={styles.tabbar}>
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
        };

        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            style={styles.tab}
          >
            {icons[route.name]({
              color: isFocused ? selectedColor : unSelectedColor,
              size: isFocused ? 28 : 24,
            })}
            <Text
              style={{
                color: isFocused ? selectedColor : unSelectedColor,
                fontSize: 11,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
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
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});

export default CustomTabBar;
