import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import CartList from './Cart'

function Index({navigation}) {
        return(
            <View style={{backgroundColor : "white", flex : 1}}><CartList navigation={navigation} /></View>
        )
}

export default Index