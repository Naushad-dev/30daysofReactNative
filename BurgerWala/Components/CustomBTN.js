import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../config/Colors'

const CustomBTN = ({onPress,title ,btnstyle,titleStyle}) => {
  return (
    
    <Pressable onPress={onPress} style={[styles.button,btnstyle]}>
    
    <Text style={[styles.titleText,titleStyle]}>{title}</Text>
    </Pressable>
  )
}

export default CustomBTN

const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        paddingHorizontal:30,
        backgroundColor:Colors.red,
        borderRadius:20,
        shadowColor:Colors.brown,
        shadowOpacity:0.5,
        // shadowOffset:{height:10, width:0},
        elevation:5,
        justifyContent:'center',
        alignItems:'center'

    },
    titleText:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'Poppins_500Medium',
        fontSize:16
    }
})