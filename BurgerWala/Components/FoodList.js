import {  FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";
import { Menu } from "../config/Data";
import Animated, {
  FadeIn,
  FadeInDown,
  Easing,
  useAnimatedScrollHandler,
  FadeInRight,
  FadeInLeft,
  BounceInDown,
  SlideInUp,
  SlideInDown,
  ReduceMotion,
} from "react-native-reanimated";

const FoodList = ({ scrollY }) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.FlatList
      data={Menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <Animated.View
            entering={FadeInDown.delay(index * 100)
              .duration(500)
              .springify()
              .damping(10).mass(5)}
          >
            <FoodCard data={item} />
          </Animated.View>
        );
      }}
      numColumns={2}
      contentContainerStyle={{ padding: 1, paddingBottom: 50, paddingLeft: 10 }}
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    />
  );
};

export default FoodList;

const styles = StyleSheet.create({});
