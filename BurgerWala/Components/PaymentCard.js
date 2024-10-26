import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../config/Colors";
import {Payment} from "../config/Data";

const PaymentCard = () => {
  const [paymentSelected, setpaymentSelected] = useState(1);
//   console.log(Payment);
  
  return (
    <View>
   { Payment.map((item) => {
        return (
          <View 
          key={item.id}
            style={[
              styles.container,
              { backgroundColor: paymentSelected=== item.mode ? Colors.brown : Colors.white },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={item.image}
                style={styles.image}
              />
              <View style={styles.detailContainer}>
                <Text
                  style={[
                    {
                      fontFamily: "Poppins_500Medium",
                      fontSize: 14,
                      fontWeight: "semibold",
                    },
                    { color: paymentSelected === item.mode ? Colors.white : Colors.brown },
                  ]}
                >
                  {item.mode}
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: "Poppins_500Medium",
                      fontSize: 12,
                      fontWeight: "300",
                      color: Colors.gray,
                    },
                    { color: paymentSelected === item.mode ? Colors.white : Colors.brown },
                  ]}
                >
                 {item.cardNumber}
                </Text>
              </View>
            </View>
    
            <View style={styles.Radio}>
              <TouchableOpacity
                onPress={() => setpaymentSelected(item.mode)}
                style={{
                  height: 25,
                  width: 25,
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {paymentSelected === item.mode ? (
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                  ></View>
                ):null}
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>)
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,

    borderRadius: 15,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "black",
    margin: 5,
    paddingVertical:10
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  Radio: {
    justifyContent: "center",
    alignItems: "center",
  },
});
