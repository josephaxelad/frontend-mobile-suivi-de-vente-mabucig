import { Icon, Text } from 'galio-framework'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

function Header({currentUser}) {
  return (
    <LinearGradient style={styles.container}
    colors={['#B00000', '#800000','#DE0000']}
        start={{ x: 0.2, y: 0.0 }}
        end={{ x: 0.9, y: 0.4 }}
        locations={[0, 0.4, 1]}
    >
        <View style={[styles.row,styles.row1]}>
            <Text size={25} bold color='white'>MAB FLOWS</Text>
            <Icon name='home' family="Ionicons" size={30} color='white'></Icon>
        </View>
        <View style={[styles.row]}>
            <Text size={20} bold color='white'>Application de Vente de cartons de cigarettes</Text>
        </View>
        <View style={[styles.row,styles.row3]}>
            {currentUser ? 
            <Text italic color='white' bold>Bienvenue, {currentUser.name}</Text> :
            null
            }
        </View>
    </LinearGradient>
    //'#DE0000',
  )
}

const styles = StyleSheet.create({
    container : {
        // flex : 1,
        // backgroundColor : "#800000",
        padding : 10,
        marginBottom : 10,
        marginTop : 10,
        borderRadius : 20
    },
    row : {
        flexDirection : 'row'
    },
    row1 : {
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    row3 : {
        justifyContent : 'flex-end'
    },
})

export default Header