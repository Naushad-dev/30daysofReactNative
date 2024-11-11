import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { navigate, resetAndNavigate } from "../utils/NavigationUtils";
import { Colors, lightColors } from "../utils/Constants";
import Animated, {
  BounceIn,
  FadeIn,
  SlideInUp,
  Easing,
  SlideInDown,
} from "react-native-reanimated";
import { ScreenHight, ScreenWidth } from "../utils/Scaling";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../components/CustomText";
import * as Speech from "expo-speech";
import LottieView from "lottie-react-native";

const Splash = () => {
  const bottomColors = [...lightColors].reverse();

  const voice = async () => {
    const allVoices = await Speech.getAvailableVoicesAsync();
    console.log(allVoices);
  };
  const speak = () => {
    const thingToSay =
      "Hello Sir mera naam baymax hai aur mai apka health sathi hu";
    Speech.getAvailableVoicesAsync();
    // console.log(voices);

    Speech.speak(thingToSay, {
      language: "hi",
      pitch: 1,
      rate: 1.25,
      voice: "hi-in-x-hie-local",
      
    });
  };

  useEffect(() => {
 speak()
    setTimeout(()=>{
      resetAndNavigate("Baymax")
    },5500)
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View

        style={[styles.imageContainer]}
        entering={SlideInDown.duration(1000).delay(500).easing(Easing.ease)}
      >
        <Image
          source={require("../assets/images/launch.png")}
          style={styles.imageStyle}
        />
      </Animated.View>

      <Animated.View
        style={styles.gradientContainer}
        entering={SlideInDown.duration(1000).easing(Easing.ease)}
      >
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View style={styles.TextContainer}>
            <CustomText fontFamily={"Theme"} fontSize={34}>
              BayMax !
            </CustomText>
            <LottieView
              source={require("../assets/animations/sync.json")}
              autoPlay={true}
              loop
              style={{ width: 280, height: 100 }}
            />
            <CustomText fontFamily={"Medium"}>
              Synchronizing for better experience......
            </CustomText>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: Colors.primary,
  },
  imageContainer: {
    width: ScreenWidth - 20,
    height: ScreenHight * 0.5,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  gradientContainer: {
    position: "absolute",
    height: "35%",
    bottom: 0,
    width: "100%",
  },
  gradient: {
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
  TextContainer: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: Colors.border,
    shadowOpacity: 1,
    alignItems: "center",
    shadowRadius: 2,
    elevation: 5,
  },
});
