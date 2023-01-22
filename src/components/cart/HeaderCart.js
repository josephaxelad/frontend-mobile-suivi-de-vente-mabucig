import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Text, Icon} from 'galio-framework'

import SelectSemiWholesaler from './../_partials/selectSemiWholesaler'


function HeaderCart({cart}) {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text size={20} bold color='#800000' style={styles.title} >panier</Text>
            <Icon name='cart' family="EvilIcons" size={25} color="#800000"/>
        </View>
        <View style={styles.selectContainer}>
            <SelectSemiWholesaler bgColor="#DCDCDC"/> 
        </View> 
        {/* {cart.length ?
        <View style={styles.selectContainer}>
            <SelectSemiWholesaler bgColor="#DCDCDC"/> 
        </View> 
        : null} */}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "column",
        alignItems : "flex-start",
        justifyContent : "space-between",
        flex : 1,
        
    },
    titleContainer : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "flex-end",
        flex : 1,
        paddingBottom : 10
    },
    title : {
        fontFamily : "",
        paddingRight : 10,
        color : "#800000"
    },
    selectContainer : {
        flexDirection : "row",
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-end",
        
    }
})

export default HeaderCart