import { Icon, Text } from 'galio-framework'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function ErrorMessage({message}) {
  return (
    message != false ?
    <View style={styles.container}>
        <Icon color='white' family="FontAwesome" name='warning'></Icon>
        <Text style={styles.message} size={15} color={"white"}  >{message}</Text>
    </View>
    : null
  )
}
const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 10,
        backgroundColor : "gray", //f08080
        borderRadius : 7,
        alignItems : "center",
        
    },
    message : {
        paddingLeft : 5
    }
})

export default ErrorMessage