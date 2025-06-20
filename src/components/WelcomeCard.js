import { View, StyleSheet,SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Display } from '../utils';
import {Images} from '../constants'
import { useNavigation } from '@react-navigation/native';


export default function WelcomeCard({title, content, image}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
     <Image style={styles.image} source={Images[image]} resizeMode='contain'/>

     <Text style={styles.titleText}>{title}</Text>
     <Text style={styles.contentText}>{content}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333333",
      justifyContent: "center",
      alignItems: "center",
      width: Display.setWidth(100),
     
    },
    image:{
        height: Display.setHeight(10),
        width: Display.setWidth(20)
    },
    titleText:{
        fontSize: 32,
        fontStyle: "italic",
        fontWeight: "bold",
        marginTop:20,
        color:'white'
    },
    contentText:{
        fontSize:18,
        textAlign:"center",
        marginTop:30,
        marginHorizontal:20,
        color:'white'
    },
  });