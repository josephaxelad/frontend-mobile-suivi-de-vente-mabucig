import { Text, Icon } from 'galio-framework'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment';
import 'moment/locale/fr'
import { currencyFormat } from '../../helpers/currencyFormat';
moment.locale('fr')

export const DetailsSale = ({sale,close}) => {

    const closeModal = () => {
        close()
      };

  return (
    <View style={styles.container} >
        <View style={styles.headerContainer}><Text color='#800000' size={20} bold>Détails de la vente</Text><TouchableOpacity onPress={()=>{closeModal()}} ><Icon size={30} color='#757575' name='closesquare' family="AntDesign" ></Icon></TouchableOpacity></View>
        <View style={styles.dateContainer}>
            <View style={{flexDirection : "row", alignItems : "center"}}>
                <Icon size={20} color='black' name="calendar" family="Entypo" />
                <Text muted bold size={20}>{moment(new Date(sale.date)).format('Do MMMM YYYY')}</Text>
            </View>
            <View style={{flexDirection : "row", alignItems : "center"}}>
                <Icon  color='black' name="clockcircle" family="AntDesign" />
                <Text muted bold size={20}>{moment(new Date(sale.date)).format('H:mm')}</Text>
            </View>
        </View>
        <ScrollView style={styles.cart} >
            {sale.cart.map((cartItem)=>{ return(<View key={cartItem.productName} style={styles.cartItem} > 
                    <View style={{flex : 1}}><Text size={15} color='#800000' bold>{cartItem.qty} x</Text></View>
                    <View style={{flex : 4}}><Text numberOfLines={1} ellipsizeMode="tail" size={15} color={"black"} bold>{cartItem.productName}</Text><Text size={12} bold italic color='#f08080'></Text></View> 
                    <View style={{flex : 2}}><Text numberOfLines={1} ellipsizeMode="tail" size={15} color={"black"} bold>{currencyFormat(cartItem.price," ")}</Text><Text size={12} bold muted>FCFA</Text></View>
                    <View style={{flex : 3}}><Text numberOfLines={1} ellipsizeMode="tail" size={15} color={"black"} bold>{currencyFormat((cartItem.price*cartItem.qty).toFixed(1)," ")}</Text><Text size={12} bold muted>FCFA</Text></View>  
                </View>)
            })}
        </ScrollView>
        <View style={styles.totalPriceContainer}>
            <Text size={25} bold color='#800000'>Total : </Text>
            <Text size={25} bold color="black">{currencyFormat(sale.price.toFixed(2)," ")}</Text>
            <Text size={25} bold muted>  FCFA</Text>
        </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        // flex : 1,
        backgroundColor : "white",
        borderRadius : 15,
        padding : 15,
        height : "60%"
    },
    headerContainer : {
        flexDirection : "row",
        justifyContent: "space-between",
    },
    dateContainer : {
        flexDirection : "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth : 1,
        borderBottomColor : "#DCDCDC",
        borderTopWidth : 1,
        borderTopColor : "#DCDCDC",
        marginVertical : 5
    },
    cart : {
        flexDirection : "column",
        flex : 1,
        // justifyContent : "flex-start",
    },
    cartItem : {
        // flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,
        borderBottomColor : "#f08080",
        paddingBottom : 5
    },
    totalPriceContainer : {
        flexDirection : "row",
        paddingTop : 5,
        borderTopWidth : 1,
        borderTopColor : "#DCDCDC",
    },
    qty : {
        backgroundColor : "#800000",
        borderRadius : 50,
    }
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSale)