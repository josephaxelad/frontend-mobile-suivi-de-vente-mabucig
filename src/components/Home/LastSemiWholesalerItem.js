import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {Text,Icon} from 'galio-framework'
import { generateBoxShadowStyle } from '../../helpers/boxShadow'
import { useNavigation } from '@react-navigation/native';

function LastSemiWholesalerItem({semiWholesaler}) {
    const navigation = useNavigation()

    const goToDetailSemiWholesalers = (semiWholesaler) => { 
        delete semiWholesaler._id
        delete semiWholesaler.address.city._id
        navigation.navigate('Clients',{screen : 'DetailSemiWholesalers',params : { semiWholesaler: semiWholesaler },initial: false})
      }

  return (
    <TouchableOpacity onPress={()=>{goToDetailSemiWholesalers(semiWholesaler)}} style={[styles.container,
    // generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 2, '#171717')
    ]}>
        <View style={[styles.row]}><Text style={{paddingRight : 5}} color='#757575' numberOfLines={1} ellipsizeMode="tail" >N° {semiWholesaler.idAccount}</Text></View>
        {/* <View><Text size={20} bold color='black'>255.000 FCFA</Text></View> */}
        <View style={[styles.row]}><Icon size={12} color="black" name='user' family="AntDesign" /><Text size={15} bold color='black' style={{flex : 1}} numberOfLines={1} ellipsizeMode="tail" > {semiWholesaler.name}</Text></View>
        <View><Text></Text></View>
        <View><Text color='#757575' numberOfLines={1} ellipsizeMode="tail">{semiWholesaler.address.name}</Text></View>
        <View style={[styles.row]}>
            <View style={[styles.row]}>
                <Icon color='#757575' name="location" family="Entypo" />
                <Text style={{paddingRight : 5}} muted italic numberOfLines={1} ellipsizeMode="tail"> {semiWholesaler.address.neighborhood}, {semiWholesaler.address.city.name} </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container : {
        width : 175,
        margin : 7,
        padding :10,
        // borderRadius : 1
        borderLeftColor : "gray",
        borderLeftWidth : 5,

        borderRightColor : "gray",
        borderRightWidth : 1,

        borderRadius : 5

        
        

    },
    row : {
        flexDirection : "row",
        alignItems : "center",
    },
    statusSent : {},
    statusPending : {}
})
export default LastSemiWholesalerItem