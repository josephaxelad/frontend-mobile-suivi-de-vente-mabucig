import React from 'react'
import { Text } from 'galio-framework'
import { Image, StyleSheet, View } from 'react-native'
import { windowHeight } from '../../constants'

function Empty({message}) {
  return (
    <View  style={styles.container}>

        {/* <View style={styles.imageContainer}>
        </View> */}
        <Image resizeMode="center" style={styles.image} source={require("../../assets/nothing.png")}/>
        
        <Text style={[styles.message,{paddingRight : 5}]} color='#800000'  bold size={20} >{message}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "transparent",
        margin : 10,
        padding : 20,
        borderRadius : 5
        // height : windowHeight-100
    },
    imageContainer : {
        flexDirection : "row",
        justifyContent : "center",
        width : "25%",
        flex : 1,
    },
    image : {
        padding : 15,
        width : 100,
        height : 100
        
    },
    message : {
        padding : 15,
    }
})
export default Empty