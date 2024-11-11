import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Baymax from "../screens/Baymax";
import { navigationRef } from "../utils/NavigationUtils";
import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const Navigation = () => {

  const[loaded, error]= useFonts({
    'Theme':require('../assets/fonts/Bangers-Regular.ttf'),
    'SemiBold':require('../assets/fonts/Okra-Bold.ttf'),
    'Medium':require('../assets/fonts/Okra-Medium.ttf'),
    'Light':require('../assets/fonts/Okra-MediumLight.ttf'),
    'Regular':require('../assets/fonts/Okra-Regular.ttf')





  })
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Baymax" component={Baymax} options={{animation:"flip", headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
