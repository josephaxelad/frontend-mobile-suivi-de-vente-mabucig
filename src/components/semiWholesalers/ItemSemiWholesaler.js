import React from 'react'
import { Pressable,  View , StyleSheet, TouchableOpacity} from 'react-native'
import { Icon, Text} from 'galio-framework';

function ItemSemiWholesaler(props) {
  return (
    <TouchableOpacity onPress={() => {props.onPress()}}>
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={styles.nameContainer}><Text h5 color='black' bold>#{props.semiWholesaler.idAccount}</Text></View>
                <View style={styles.nameContainer}><Text p color='black' bold>{props.semiWholesaler.name}</Text></View>
                <View style={styles.addressContainer}>
                    <Icon color='#757575' style={styles.logoAddress} name="location" family="Entypo" />
                    <Text muted italic>{props.semiWholesaler.address.neighborhood}, {props.semiWholesaler.address.city.name}</Text>
                </View>
            </View>
            <View style={styles.containerRight}>
                <Icon name="rightcircle" family="AntDesign" size={30} color="#800000"></Icon>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
    container : {
        height : 100,
        backgroundColor : 'white',
        flexDirection : 'row',
        padding : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#f08080'
    },
    containerLeft : {
        flex : 9,
        flexDirection : 'column',
        justifyContent : 'space-between',
    },
    containerRight : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    nameContainer : {
        flexDirection : 'row',
        // backgroundColor : 'blue'
    },
    addressContainer : {
        flexDirection : 'row'
    },
    logoAddress : {
        paddingLeft :5,
        paddingRight : 7,
    }
})


export default ItemSemiWholesaler