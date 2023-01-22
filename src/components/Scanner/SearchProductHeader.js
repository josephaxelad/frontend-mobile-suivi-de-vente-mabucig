import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Text, Icon} from 'galio-framework'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function SearchProductHeader({search}) {
  return (
    <View >
        <View style={styles.titleContainer}><Text size={20} bold color='#800000' style={styles.title} >produits</Text><FontAwesome5 name='box' size={20} color="white"/></View>
        <View><Input
            onChangeText={(x) => search(x)}
            placeholder="Rechercher un produit..."
            placeholderTextColor="#800000"
            right
            icon="search"
            family="MaterialIcons"
            iconSize={25}
            iconColor="#800000"
            rounded
            color='#800000'
            bgColor='white'
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
        color : "white"
    }
})
export default SearchProductHeader