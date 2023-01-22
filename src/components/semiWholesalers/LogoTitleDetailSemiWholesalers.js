import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text} from 'galio-framework'

function LogoTitleDetailSemiWholesalers({semiWholesaler}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title} size={25} bold>client </Text>
        <Text bold size={20} color='black'>#{semiWholesaler.idAccount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "flex-end"
    },
    title : {
        color : "#800000"
    },
    id :{}
})

export default LogoTitleDetailSemiWholesalers