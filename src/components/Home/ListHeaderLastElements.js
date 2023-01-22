import { Icon, Text } from 'galio-framework'
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

function ListHeaderLastElements({title,icon,seeAll}) {
  return (
    <View style={styles.container}>
        <View><Text color='black' bold>{title}</Text></View>
        <TouchableOpacity onPress={()=>{seeAll()}} style={styles.row}><Text color='black' italic  >Voir tous </Text><Icon color='#757575' name='arrowright' family="AntDesign" ></Icon></TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "space-between",
        
    },
    row : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    }
})

export default ListHeaderLastElements