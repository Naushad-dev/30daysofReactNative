import {
  Image,
  ImageBackground,
  ImageBackgroundComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../config/Colors";
import { Stack } from "expo-router";
import Accordion from "../Components/Accordian";
import Feather from "@expo/vector-icons/Feather";
import CustomBTN from "../Components/CustomBTN";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
        }}
      />

      <ImageBackground
        source={require("../assets/images2/pngwing 12.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <View style={{ top: 100, gap: 10 }}>
          <Accordion />
        </View>
        <View style={{ top: 100, gap: 10 }}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              elevation: 6,
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 0,
              },
              paddingVertical: 10,

              marginHorizontal: 15,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 22,
                fontWeight: "semibold",
              }}
            >
              About us !
            </Text>
            <Feather name={"chevron-right"} size={24} color="black" />
          </View>
        </View>

        <View style={{ top: 100, gap: 10 }}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              elevation: 6,
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 0,
              },
              paddingVertical: 10,

              marginHorizontal: 15,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 22,
                fontWeight: "semibold",
              }}
            >
              Payment Details 
            </Text>
            <Feather name={"chevron-right"} size={24} color="black" />
          </View>
        </View>

        <View style={{ top: 100, gap: 10 }}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              elevation: 6,
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 0,
              },
              paddingVertical: 10,

              marginHorizontal: 15,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 22,
                fontWeight: "semibold",
              }}
            >
              Terms & Conditions
            </Text>
            <Feather name={"chevron-right"} size={24} color="black" />
          </View>
        </View>

        <View style={{top:260, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20}}>
        <CustomBTN title={'Edit'} btnstyle={{paddingHorizontal:50, backgroundColor:Colors.brown}}/>
        <CustomBTN title={'LogOut'} btnstyle={{}}/>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/med/men/93.jpg",
          }}
          resizeMode="contain"
          style={styles.userImage}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.3,
    backgroundColor: Colors.red,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80%",

    backgroundColor: Colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  imageContainer: {
    height: 120,
    width: 120,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "13%",
    left: "50%",
    transform: [{ translateX: -50 }],
    shadowColor: Colors.red,
    elevation: 10,
    shadowOffset: { height: 30, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  userImage: {
    height: 110,
    width: 110,
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 2,
  },
});
