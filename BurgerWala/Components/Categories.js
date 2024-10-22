import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CategoriesData } from "../config/Data";
import { Colors } from "../config/Colors";

const Categories = () => {
  const [selected, setselected] = useState("All");
  console.log(CategoriesData);

  return (
    <View style={styles.container}>
      <FlatList
      
        data={CategoriesData}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setselected(item);
            }}
            style={[
              styles.btn,
              {
                backgroundColor: selected === item ? Colors.red : "#F3F8F9",
              },
            ]}
          >
            <Text
              style={{ color: selected === item ? Colors.white : Colors.gray }}
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom:10
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 18,
    borderCurve: "continuous",
  },
});
