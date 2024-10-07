import { StyleSheet, Text, TouchableOpacity,  } from "react-native";
import React,{useContext} from "react";
import { Colors } from "../Constant";
import * as Haptics from 'expo-haptics';
import { ThemeContext } from "../Context";

const Button = ({ theme, text, onPress, key }) => {
  const isOperator = ["/", "*", "-", "+", "="].includes(text);
  const { playSound} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      key={key}
      onPress={() =>{ 


        onPress(text)
        // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        playSound()
      
      }}
      style={[
        styles.btn,
        {
          backgroundColor: isOperator
            ? Colors.blue
            : theme === "light"
            ? Colors.white
            : Colors.grey,
        },
      ]}
    >
      <Text
        style={[
          styles.btnText,
          {
            color: isOperator
              ? Colors.white
              : theme === "light"
              ? Colors.dark
              : Colors.white,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderRadius: 20,
    margin: 10,
  },
  btnText: {
    fontSize: 25,
    fontWeight: "900",
  },
});
