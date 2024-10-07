import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dot from './Dot'

const Pagination = ({data, buttonValue}) => {
  return (
    <View style={styles.paginationContainer}>
      {
        data.map((_,index)=>{
            return <Dot index={index} buttonValue={buttonValue} key={index}/>
        })
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    paginationContainer:{
        flexDirection:"row",
        position:"absolute",
        bottom:70
    }
})