import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Tabs } from "expo-router";

import CustomTabBar from "../../Components/Tabar";
import { useSharedValue } from "react-native-reanimated";
import { AppContext } from "../../Context/AppContext";

const _layout = () => {
  const [showTabbar, setshowTabbar] = useState(true);
  const {scrollY}= useContext(AppContext)


  return (
    <Tabs
      tabBar={(props) => {
        return (

              <CustomTabBar {...props} scrollY={scrollY} />
        );
      }}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="Orders" options={{ headerShown: false }} />
      <Tabs.Screen name="chats" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default _layout;
