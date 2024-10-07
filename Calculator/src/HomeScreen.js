import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar";
import KeyPad from "./components/KeyPad";
import { Colors } from "./Constant";
import { ThemeContext } from "./Context";
import { useContext } from "react";
import Display from "./components/Display";

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? Colors.white : Colors.dark },
      ]}
    >
      <StatusBar
        backgroundColor={theme === "light" ? Colors.white : Colors.dark}
        style={{color:"white"}}
      
      />
      <View style={{paddingTop:10}}>
        <TopBar />
      </View>
      <View style={{flex:1}}>
        <Display />
      </View>
      <View style={{ flex:2,paddingTop:20}}>
        <KeyPad />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  flex:1,
    paddingTop: 25,
    backgroundColor: Colors.white,
  },
});
