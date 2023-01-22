import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {Text,Icon} from 'galio-framework'
import { generateBoxShadowStyle } from '../../helpers/boxShadow'
import {currencyFormat} from '../../helpers/currencyFormat'
import moment from 'moment';
import 'moment/locale/fr'
moment.locale('fr')


function LastSaleItem({sale}) {
  return (
    <TouchableOpacity style={[styles.container,
    // generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 2, '#171717')
    ]}>
        <View style={[styles.row]}><Text style={{paddingRight : 5}} color='#757575' numberOfLines={1} ellipsizeMode="tail" >N° {sale.semiWholesaler ? sale.semiWholesaler.idAccount : sale.semiWholesalerIdAccount}</Text></View>
        <View><Text numberOfLines={1} ellipsizeMode="tail" size={18} bold color='black'>{currencyFormat(sale.price.toFixed(2)," ")} FCFA</Text></View>
        <View style={[styles.row]}><Icon color='#757575' size={12} name='user' family="AntDesign" /><Text muted style={{flex : 1}} numberOfLines={1} ellipsizeMode="tail" >  {sale.semiWholesaler ? sale.semiWholesaler.name : sale.semiWholesalerName}</Text></View>
        <View><Text></Text></View>
        <View><Text muted numberOfLines={1} ellipsizeMode="tail">{moment(sale.date).format('L')}</Text></View>
        <View style={[styles.row,{justifyContent : "space-between"}]}>
            <View style={[styles.row]}><Icon color='#757575' name="clockcircle" family="AntDesign" /><Text muted bold>{moment(sale.date).format('LT')}</Text></View>
            <View style={[styles.row]}><View></View>
                    {sale.sent == true ? 
                    <View style={styles.statusSent}><Icon color='green' name="done-all" family="MaterialIcons" /></View> :
                    <View style={styles.statusPending}><Icon color='orange' name="minuscircleo" family="AntDesign" size={10} /></View>}  
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
        borderLeftColor : "#f08080",
        borderLeftWidth : 5,

        borderRightColor : "#f08080",
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

export default LastSaleItem