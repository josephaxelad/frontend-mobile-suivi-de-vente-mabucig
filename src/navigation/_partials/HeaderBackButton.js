import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HeaderBackButton = (navigation) => { 
    // if(canGoBack){
      
    // }
    return(
      <TouchableOpacity style={styles.headerBackBtn} onPress={() => { navigation.goBack()}}>
        <Ionicons name='arrow-back-outline'size={25} color={"white"}></Ionicons>
      </TouchableOpacity>
      )
  }

  const styles = StyleSheet.create({
    headerBackBtn : {
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#800000",
      padding : 3,
      borderRadius : 50,
      marginRight : 10,
      width : 35,
      height : 35
    }
  });

export default HeaderBackButton