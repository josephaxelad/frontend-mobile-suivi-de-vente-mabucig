import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {Button,Text} from 'galio-framework'
import {generateBoxShadowStyle} from './../../helpers/boxShadow'
import ModalConf from '../_partials/modalConf'
import { connect, useDispatch } from 'react-redux'
import { updateCartDataAction } from '../../store/actions/cartActions'
import { cartPriceSelector, cartQtySelector } from '../../store/selectors/cartSelectors'
import { sell as sellAction} from '../../services/orders'
import { semiWholesalerSelectedSelector } from '../../store/selectors/semiWholesalerSelectedSelectors'
import { currentUserSelector } from '../../store/selectors/currentUserSelectors'
import { openAlertAction } from '../../store/actions/alertActions'
import { isLoadingAction } from '../../store/actions/loadingActions'
import { currencyFormat } from '../../helpers/currencyFormat'

function FootCart({cart,cartPrice,semiWholesalerSelected,currentUser,openAlertAction,isLoadingAction}) {


    // const [isMounted, setIsMounted] = useState(null);
    const dispatch = useDispatch()
    const [isModalVisible, setModalVisible] = useState(false);


    

    // useEffect(() => {
    //     if (isMounted == null) { setIsMounted(true);}
        
    //     return () => { 
    //         setIsMounted(false)
    //     };
    // },[])
    


    // Ouvrir modal de la confirmation de la vente
    const openModal = () => {
        setModalVisible(true)
    };

    // afficher un message d'alert
    const openAlert = (type,message) => { 
        openAlertAction(type,message)
     }

    //Vendre une commande
    const sell = async () => {
        isLoadingAction(true)
        if (semiWholesalerSelected) {
            const order = {
                date : Date(),
                cart : cart.map((cartItem) => {return {qty : cartItem.qty,
                    price : cartItem.product.price,
                    productName : cartItem.product.sku,
                    idProduct : cartItem.product._id,
    
                }  }),
                price : cartPrice,
                idWholesaler : currentUser._id,
                idSemiWholesaler : semiWholesalerSelected._id,
                sent : false,

                semiWholesalerName : semiWholesalerSelected.name,
                semiWholesalerIdAccount : semiWholesalerSelected.idAccount,
            }
            await dispatch(sellAction(order))
            isLoadingAction(false)
        } else {
            isLoadingAction(false)
            openAlert("warning","Vous devez choisir un client !")
        } 
     }
    


  return (
    // isMounted == true ?
    (cart.length ? 
    <View style={styles.container}>
        <ModalConf confirm={sell}  body={'Voulez-vous vraiment confirmer la commande ?'} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
        <View style={styles.row}><Text color='#800000' bold size={20}>Total : </Text><Text size={25} color="black" bold>{currencyFormat(cartPrice.toFixed(2)," ")} FCFA</Text></View>
        <View style={styles.row}><Button onPress={()=>{openModal()}} style={[styles.ButtonToSell,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717')]} round  color="#800000"><Text bold color='white' size={20}>Vendre</Text></Button></View>
    </View>
    : null)
    // : null
  )
}

const styles = StyleSheet.create({
    container : {
        // backgroundColor : "transparent",
        backgroundColor : "#DCDCDC",
        // borderRadius : 25,
        borderTopStartRadius: 25,
        borderTopEndRadius : 25,
        padding :10,
        // margin :10,
        // marginHorizontal : 10,
        // marginBottom : 10
    },
    row : {
        flexDirection : "row",
        alignItems : "center",
        // flex : 1
    },
    ButtonToSell : {
        flex : 1
    }
})

const mapStateToProps = (state) => ({
    cartPrice : cartPriceSelector(state),
    cartQty : cartQtySelector(state),
    semiWholesalerSelected : semiWholesalerSelectedSelector(state),
    currentUser : currentUserSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    updateCartDataAction : (cart)=>{dispatch(updateCartDataAction(cart))},
    openAlertAction : (type,message)=>{dispatch(openAlertAction(type,message))},
    isLoadingAction : (isLoading) => {dispatch(isLoadingAction(isLoading))}
})

export default connect(mapStateToProps,mapDispatchToProps)(FootCart)