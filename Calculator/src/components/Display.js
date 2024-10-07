import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context";
import { Colors } from "../Constant";

const Display = () => {
  const { input, setinput, result, theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.result_text,
          { color: theme === "light" ? Colors.dark : Colors.white },
        ]}
      >
        {result}
      </Text>
      <TextInput
        editable={false}
        style={[
          styles.display,
          { color: theme === "light" ? Colors.dark : Colors.white },
        ]}
        value={input}
        onChangeText={(text) => setinput(text)}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor={theme=== "light" ? Colors.dark:Colors.white}
      />
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 5,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-end",

    paddingRight: 40,
  },
  display: {
    fontSize: 35,
  },
  result_text: {
    fontSize: 45,
    fontWeight: "bold",
  },
});
