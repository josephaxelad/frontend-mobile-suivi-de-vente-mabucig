import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {Text, Icon} from 'galio-framework'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ListHeaderSale() {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text size={20} bold color='black' style={styles.title} >mes ventes</Text>
            {/* <Icon name='coins' family='FontAwesome5' size={25} color="#800000"/> */}
            <FontAwesome5 name='coins' size={25} color="#800000"></FontAwesome5>
        </View>
        <View>
            {/* <TouchableOpacity>
                <FontAwesome5 name='filter' size={22} style={{marginTop : 3}} ></FontAwesome5>
            </TouchableOpacity> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    titleContainer : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center"
    },
    title : {
        fontFamily : "",
        paddingRight : 10,
        color : "#800000"
    }
})

export default ListHeaderSale