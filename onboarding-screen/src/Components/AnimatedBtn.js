import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnimatedBtn = () => {
  return (
    <View style={styles.container}>
      <Text>AnimatedBtn</Text>
    </View>
  )
}

export default AnimatedBtn

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})