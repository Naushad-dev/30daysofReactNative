import { Image, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomBTN from "../Components/CustomBTN";
import { Colors } from "../config/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Link, router } from "expo-router";

const OrderSuccess = () => {
  const [showModal, setsetshoeModal] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal visible={showModal} animationType="slide" >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: Colors.gray,
          }}
        >
          <View
            style={{
              height: 400,
              width: 300,

              borderRadius: 25,
              backgroundColor: Colors.white,
              elevation: 15,
              padding: 10,
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../assets/Done2.png")}
                style={{ height: 80, width: 80 }}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    color: Colors.red,
                    fontFamily: "Poppins_500Medium",
                    fontSize: 26,
                    marginTop:10,
                    fontWeight:"bold"
                  }}
                >
                  Success !
                </Text>
                <Text numberOfLines={2} style={{fontSize:12, fontFamily:"Poppins_500Medium", opacity:0.7, textAlign:"center",
                  marginTop:30, color:Colors.gray
                }}>
                  Your Payment is Successfully Recieved ! Reciept has been send
                  to your mail
                </Text>
              </View>
            </View>

            <View style={{ marginHorizontal:50}}>
          
            <CustomBTN
                title={"Go Back"}
                onPress={() => {
                  
                return(
                  setsetshoeModal(false),
                  router.push('./(tabs)')
                )
                  
                }}
              />
      
              
            </View>
          </View>
        </View>
      </Modal>

     
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
