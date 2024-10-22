import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import SearchFilter from "../../Components/SearchFilter";
import Categories from "../../Components/Categories";
import FoodList from "../../Components/FoodList";
import { AppContext } from "../../Context/AppContext";

const index = () => {
  const {scrollY}= useContext(AppContext)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <Header />
        <SearchFilter />
        <Categories />
        <FoodList scrollY={scrollY} />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
   container: { 
flex:1
 
  } 
  });
