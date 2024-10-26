import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import Chat from "@codsod/react-native-chat";
import { Colors } from '../../config/Colors';

const chats = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hellow Hope your doing good ",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Food Go",
        },
      },
      {
        _id: 2,
        text: "Hello Food Go",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Naushad Khan",
        },
      },
    ]);
  }, []);

  // const onSetMessages=(text)=>{
  //   if(text.trim().length ===0) return ;
  //   setMessages((prev)=>[
  //     ...prev,
  //     {
  //       _id:123,
  //       text:text,
  //       createdAt: new Date(),
  //       user: {
  //         _id:,
  //         name:"Naushad Khan"
  //       }
  //     }
  //   ])

  // }

  return (
    <View style={{flex:1,paddingBottom:120, backgroundColor:"white"}}>
    <Chat 
    inputBorderColor={Colors.red}
    messages={messages}
    
    themeColor={Colors.red}
    themeTextColor='white'
    user={
      {
        _id:1,
        name:"Food Go"
      }
    }
    />
    </View>
  )
}

export default chats

const styles = StyleSheet.create({})