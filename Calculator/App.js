import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/HomeScreen';
import { ThemeProvider } from './src/Context';

export default function App() {
  return (
    <View style={styles.container}>
    <ThemeProvider>
    <HomeScreen/>

    </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
