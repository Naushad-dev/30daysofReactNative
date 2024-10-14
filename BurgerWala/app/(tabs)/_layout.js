import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import CustomTabBar from "../../Components/Tabar";

const _layout = () => {
  return (
    <Tabs tabBar={(props)=><CustomTabBar {...props}/>} >
      <Tabs.Screen name="index" options={{ headerTitle: "HomePage" }} />
      <Tabs.Screen name="Orders" options={{ headerTitle: "Orders" }} />
      <Tabs.Screen name="chats" options={{ headerTitle: "Chats" }} />

      <Tabs.Screen name="profile" options={{ headerTitle: "Profile" }} />
    </Tabs>
  );
};

export default _layout;
