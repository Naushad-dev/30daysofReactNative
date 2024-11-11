import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState, useRef } from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/Background'
import Loader from '../components/Laoder'
import BigHero6 from '../components/BayMax/BigHero6'

const Baymax = () => {
const [showLoader, setshowLoader] = useState(true)

const [showInstruction, setshowInstruction] = useState(true)
const [showMessage, setshowMessage] = useState('')
const [showPedometer, setshowPedometer] = useState(false)

  const blurOpacity= useRef(new Animated.Value(0)).current
  const startBlur=()=>{
    Animated.timing(blurOpacity,{
      duration:2000,
      toValue:1,
      useNativeDriver:true
    }).start()
  }

  const unBlur=()=>{
    Animated.timing(blurOpacity,{
      duration:2000,
      toValue:0,
      useNativeDriver:true
    }).start()
  }
useEffect(()=>{
  const timer= setTimeout(startBlur,500)
  return ()=> clearTimeout(timer)
},[])

  return (
    <View style={styles.container}>

{showLoader && <View style={styles.loaderStyle}>
  <Loader/>
  </View>}

  {showInstruction && <BigHero6/>}
      <Background blurOpacity={blurOpacity} />
    </View>
  )
}

export default Baymax

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.secondry,
    justifyContent:"center",
    alignItems:"center"
  },
   loaderStyle:{
    position:"absolute"
  }
})