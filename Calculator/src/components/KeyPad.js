import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../Context";

const KeyPad = () => {
  const { theme, input, setinput, result, setresult } =
    useContext(ThemeContext);

  const handleButtonPress = (val) => {
    if (val === "AC") {
      setinput("");
      setresult(null);
    } else if(val === "C"){
      setinput(input.slice(0,-1))

    }else if (val === "=") {
      try {
        setresult(eval(input));
      } catch (error) {
        alert("Sorry Under Maintainer", error);
      }
    } else {
      setinput(input + val);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        {["C", "AC", "%", "/"].map((item, index) => (
          <Button
            key={index}
            theme={theme}
            text={item}
            onPress={() => handleButtonPress(item)}
          />
        ))}
      </View>

      <View style={styles.rows}>
        {["7", "8", "9", "*"].map((item, index) => (
          <Button
            key={index}
            theme={theme}
            text={item}
            onPress={() => handleButtonPress(item)}
          />
        ))}
      </View>

      <View style={styles.rows}>
        {["4", "5", "6", "-"].map((item, index) => (
          <Button
            key={index}
            theme={theme}
            text={item}
            onPress={() => handleButtonPress(item)}
          />
        ))}
      </View>

      <View style={styles.rows}>
        {["3", "2", "1", "+"].map((item, index) => (
          <Button
            key={index}
            theme={theme}
            text={item}
            onPress={() => handleButtonPress(item)}
          />
        ))}
      </View>

      <View style={styles.rows}>
        {[".", "0", "+/-", "="].map((item, index) => (
          <Button
            key={index}
            theme={theme}
            text={item}
            onPress={() => handleButtonPress(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    width: "100%",
  },
  rows: {
    flexDirection: "row",
  },
});
