import { Button, Icon, Text } from 'galio-framework'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { generateBoxShadowStyle } from '../../helpers/boxShadow'
import { currencyFormat } from '../../helpers/currencyFormat'
import { decrementCartItemQtyAction, deleteProductFromCartAction, incrementCartItemQtyAction } from '../../store/actions/cartActions'

function CartItem({cartItem,decrementCartItemQtyAction,incrementCartItemQtyAction,deleteProductFromCartAction}) {

    
    const decrementCartItemQty = (product,qty) => { if (qty>1) {decrementCartItemQtyAction(product)}}
    const incrementCartItemQty = (product) => { incrementCartItemQtyAction(product) }
    const deleteProductFromCart = (product) => { deleteProductFromCartAction(product) }
    
  return (
    <View style={[styles.container]}>
        <View style={[styles.col1]}>
            <Image resizeMode="center" style={[styles.image]} source={require("../../assets/product_default.png")}/>
        </View>
        <View style={[styles.col2]}>
            <View style={[styles.row]}><Text muted size={20} bold>{cartItem.product.sku}</Text></View>
            <View style={[styles.row,styles.row2]}>
                <Text color='#f08080' bold italic>{cartItem.product.mark.name}</Text><Text color='black' size={20} bold>{currencyFormat((cartItem.product.price*cartItem.qty).toFixed(2)," ")} FCFA</Text></View>
            <View style={[styles.row]}>
                <View style={[styles.row,styles.qtyZone]}>
                <Button onPress={()=>{decrementCartItemQty(cartItem.product,cartItem.qty)}} style={[styles.btn,styles.btnQty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} bold>-</Text></Button>
                <Button disabled style={[styles.btn,styles.qty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} >{(cartItem.qty).toFixed(2)}</Text></Button>
                <Button onPress={()=>{incrementCartItemQty(cartItem.product)}} style={[styles.btn,styles.btnQty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} bold>+</Text></Button>
                </View>
                <Button onPress={()=>{deleteProductFromCart(cartItem.product)}} style={[styles.btn,styles.btnSupp,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]} >
                    <Icon name='trash' family="EvilIcons" size={30} color="white"></Icon></Button>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flexDirection : "row",
        height : 120,
        padding : 5,
        // margin : 10,
        marginHorizontal : 10,
        marginBottom : 10
    },
    image : {
        flex : 1,
    },
    col1 : {
        flex : 3,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"
    },
    col2 : {
        flex : 7
    },
    row : {
        flexDirection : "row",
        alignItems : 'center'
    },
    row2 : {
        justifyContent : "space-between"
    },
    btn : {
        backgroundColor :"#DCDCDC"
    },
    btnQty : {
        flex : 1,
        margin : 0,
    },
    btnSupp : {
        flex : 4
    },
    qty : {
        flex : 1,
        flexDirection : "row",
        justifyContent : 'center',
        margin : 0,
        borderRadius : 0,
        backgroundColor :"#DCDCDC"
    },
    qtyZone : {
        flex : 6,
    }
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    incrementCartItemQtyAction : (product) => {dispatch(incrementCartItemQtyAction(product))},
    decrementCartItemQtyAction : (product) => {dispatch(decrementCartItemQtyAction(product))},
    deleteProductFromCartAction : (product) => {dispatch(deleteProductFromCartAction(product))}
    
})

export default connect(null,mapDispatchToProps)(CartItem)