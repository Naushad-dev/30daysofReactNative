import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../config/Colors";
import { Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import PaymentCard from "../Components/PaymentCard";
import CustomBTN from "../Components/CustomBTN";
import { router } from "expo-router";


const Cart = () => {
  const { HEIGHT, WIDTH } = useWindowDimensions();

  const handleOrders=()=>{
  router.push('/OrderSuccess')  

  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={[styles.container, { paddingTop: "6%" }]}>
        <Stack.Screen options={{ headerShown: true }} />
        <View style={styles.itemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images2/Burger1.png")}
              style={styles.itemImage}
            />
          </View>
          <View
            style={{
              marginLeft: 50,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.brown,
                fontSize: 24,
                fontFamily: "Poppins_500Medium",
                fontWeight: "semibold",
              }}
            >
              Chees Burger{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderColor: Colors.red,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Pressable style={{ paddingVertical: 1, paddingHorizontal: 2 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>-</Text>
              </Pressable>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>0</Text>
              <Pressable style={{ paddingVertical: 1, paddingHorizontal: 2 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        
        <View
          style={{
            marginTop: 20,
            backgroundColor: Colors.white,
            elevation: 10,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: {
              height: 10,
              width: 0,
            },
            paddingVertical: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
            {" "}
            <Feather name="edit" size={24} color={Colors.red} /> Add Note{" "}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingVertical: 8,
            paddingHorizontal: 8,
            borderRadius: 10,
            shadowColor: Colors.brown,
            shadowOffset: { height: 10, width: 0 },
            shadowRadius: 10,
            shadowOpacity: 0.5,
            backgroundColor: Colors.white,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
              color: Colors.brown,
            }}
          >
            Order Summary
          </Text>

          <View style={styles.BillContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Order</Text>

              <Text style={styles.summaryPrice}>150 ₹</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Taxes{" "}
                <Feather color={Colors.gray} name="help-circle" size={14} />
              </Text>

              <Text style={styles.summaryPrice}>30 ₹</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Delivery{" "}
                <Feather color={Colors.gray} name="package" size={14} />
              </Text>

              <Text style={styles.summaryPrice}>35 ₹</Text>
            </View>

            <Text
              style={{ opacity: 0.5, color: Colors.gray, alignSelf: "center" }}
            >
              - - - - - - - - - - - - - - - - - - - - -
            </Text>

            <View style={[styles.summaryRow, { marginTop: 15 }]}>
              <Text style={styles.summaryLabel}>Total</Text>

              <Text style={styles.summaryPrice}>115 ₹</Text>
            </View>
            <View style={[styles.summaryRow]}>
              <Text style={styles.summaryLabel}>Estimated Delivery time :</Text>
              <Text style={styles.summaryPrice}>30-35 min</Text>
            </View>
          </View>
        </View>

        <View style={styles.Payments}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
              color: Colors.brown,
            }}
          >
            Payment Method
          </Text>

          <PaymentCard />
         
        </View>
      </View>


      <View style={styles.placeOrder}>
        <View>
        <Text style={{fontSize:12, color:Colors.gray, opacity:.5}}>Total Price:</Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
              color: Colors.brown,
            }}
          >
            120 ₹
          </Text>
        </View>
        <View>
        <CustomBTN
         onPress={handleOrders}
          title="Pay Now"
          btnstyle={{ backgroundColor: Colors.brown, paddingHorizontal: 45 }}
          titleStyle={{
            color: "white",
            fontFamily: "Poppins_500Medium",
            fontWeight: "bold",
          }}
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    // paddingTop:HEIGHT-20
    marginHorizontal: 10,
  },
  itemWrapper: {
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3 / 4,
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  summaryLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: Colors.gray,
    fontWeight: "semibold",
  },
  summaryPrice: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: Colors.gray,
    fontWeight: "semibold",
  },
  BillContainer: {},
  Payments: {
    marginTop: 10,
    marginBottom:50
  },
  placeOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems:"center",
    marginVertical:10
  },
});
