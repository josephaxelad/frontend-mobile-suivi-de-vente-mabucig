import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {DeckSwiper, Block, Text,Icon} from 'galio-framework'
import moment from 'moment';
import 'moment/locale/fr'
import { currencyFormat } from '../../helpers/currencyFormat';
moment.locale('fr')

function ItemSale({sale,openModal,closeModal}) {
    const _openModal = (sale) => {
        openModal(sale)
      };
      
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{_openModal(sale)}}>
        <View style={styles.containerLeft}>
            <View style={styles.containerItem}><Text style={{textAlign : "center"}} numberOfLines={2}  color='white' size={17} bold>{moment(new Date(sale.date)).format('Do MMMM')}</Text></View>
            <View style={[styles.containerItem,{paddingBottom : 2,borderBottomWidth :2,borderColor:"#efeaea"}]}><Text color='white' size={19} bold>{moment(new Date(sale.date)).format('YYYY')}</Text></View>
            <View style={styles.containerItem}><Icon color='white' name="clockcircle" family="AntDesign" /><Text color='white' bold>{moment(new Date(sale.date)).format('H:mm')}</Text></View>
        </View>
        <View style={styles.containerRight}>
            <View style={[styles.containerItem,styles.containerRightItem]}><Text muted  style={{paddingRight : 5}}>N° {sale.semiWholesaler ? sale.semiWholesaler.idAccount : sale.semiWholesalerIdAccount }</Text><Text  bold size={18} color="black"> {currencyFormat(sale.price.toFixed(2)," ") } FCFA</Text></View>
            <View style={[styles.containerItem,{alignItems :"center"}]}><Icon color="black"  size={12} name='user' family="AntDesign" /><Text color='black' size={15}> {sale.semiWholesaler ? sale.semiWholesaler.name : sale.semiWholesalerName}</Text></View>
            <View style={[styles.containerItem,styles.containerRightItem]}><View></View>
                {sale.sent == true ? 
                <View style={styles.statusSent}><Text color={ 'black'}>envoyée</Text><Icon name="done-all" color='black' family="MaterialIcons" /></View> :
                <View style={styles.statusPending}><Text color={ 'black'}>en attente</Text><Icon name="minuscircleo" color='black' family="AntDesign" size={10} /></View>}
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
    container : {
        
        margin : 5,
        borderRadius : 20,
        height : 100,
        backgroundColor : "white",
        flexDirection : "row",
    },
    containerLeft : {
        flexDirection : "column",
        flex : 3,
        justifyContent : "space-around",
        alignItems : "center",
        backgroundColor : "#800000", //f08080
        padding : 5,
        borderTopLeftRadius : 20,
        borderBottomStartRadius : 20
    },
    containerRight : {
        flex : 7,
        justifyContent : "space-between",
        padding : 5,
    },
    containerItem : {
        flexDirection : "row"
    },
    containerRightItem : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    statusSent : {
        backgroundColor : "#00FF00",
        borderColor : "#003200",
        borderWidth : 1,
        borderRadius : 7,
        paddingHorizontal : 5,
        flexDirection : "row",
        alignItems : "center",
    },
    statusPending : {
        backgroundColor : "#FF8E00",
        borderColor : "#FF2E00",
        borderWidth : 1,
        borderRadius : 7,
        paddingHorizontal : 5,
        flexDirection : "row",
        alignItems : "center",
    }
})

export default ItemSale