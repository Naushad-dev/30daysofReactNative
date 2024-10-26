import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";

import * as SplashScreen from "expo-splash-screen";
import { AppContextProvider } from "../Context/AppContext";
import { Colors } from "../config/Colors";

SplashScreen.preventAutoHideAsync();
const _layout = () => {
  const [loaded, error] = useFonts({
    Lobster_400Regular,
    Poppins_500Medium,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <AppContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="/[productDetail]"
          options={{
            headerShown: true,
            title: "Product Details",
            headerStyle: { backgroundColor: Colors.red },
          }}
        />
        <Stack.Screen
          name="Profile"
          
        />
        <Stack.Screen name="/Cart" options={{ animation: "flip" }} />
        <Stack.Screen name="/Orders" />
      </Stack>
    </AppContextProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
