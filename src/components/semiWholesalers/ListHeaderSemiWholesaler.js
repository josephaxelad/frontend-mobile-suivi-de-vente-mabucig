import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Text, Icon} from 'galio-framework'

function ListHeaderSemiWholesaler({search}) {
  return (
    <View>
        <View style={styles.titleContainer}><Text size={20} bold color='#800000' style={styles.title} >mes clients</Text><Icon name='groups' family='FontAwesome' size={25} color="#800000"/></View>
        <View><Input
            onChangeText={(x) => search(x)}
            placeholder="Rechercher un client..."
            placeholderTextColor="white"
            right
            icon="person-search"
            family="MaterialIcons"
            iconSize={25}
            iconColor="white"
            rounded
            color='white'
            bgColor='#800000'
            style={{borderColor : "#f08080"}}
            /></View>
    </View>
  )
}

const styles = StyleSheet.create({
    titleContainer : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "flex-end"
    },
    title : {
        fontFamily : "",
        paddingRight : 10,
        color : "#800000"
    }
})
export default ListHeaderSemiWholesaler