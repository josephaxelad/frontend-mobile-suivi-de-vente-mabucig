import axios from 'axios';
import { api, wait } from '../constants';
import { addPendingOrderAction, updateOrdersAction } from '../store/actions/ordersActions';
import NetInfo from "@react-native-community/netinfo";
import { removeCartAction } from '../store/actions/cartActions';
import {navigate} from '../helpers/RootNavigation';
import { openAlertAction } from '../store/actions/alertActions';
import { updateSemiWholesalerSelectedAction } from '../store/actions/semiWholesalerSelectedActions';
import { updateOrdersCounterAction } from '../store/actions/ordersCountActions';
// import {await} from '../constants/index'

export const sell = (order) => async (dispatch) => { 
    NetInfo.fetch()
    .then(async state=>{
        if (state.isInternetReachable) {
            axios.post(api+'order/create/',order)
            .then(async res =>{
                
                // Mise à jour
                dispatch(getSales())

                //Vider le panier & le client selectionner
                dispatch(removeCartAction())
                await dispatch(updateSemiWholesalerSelectedAction(null))

                //aller à la page des ventes
                navigate('Ventes')

                //afficher message d'alert de succes
                dispatch(openAlertAction("success","Vente effectuée et envoyée avec succès !"))


            })
            .catch(async error =>{
                // Update pending orders
                try {
                    await dispatch(addPendingOrderAction(order))

                    //Vider le panier & le client selectionner
                    dispatch(removeCartAction())
                    dispatch(updateSemiWholesalerSelectedAction(null))

                    //Afficher message de success
                    dispatch(openAlertAction("success","Vente effectuée avec succès, en attente et sera envoyée quand la connexion sera retablie !"))

                    //aller à la page des ventes
                    navigate('Ventes')
                } catch (error) {
                    dispatch(openAlertAction("error","Une erreur est survenue !"))
                }
                

                console.log(error.response)
            })
        } else {
            // Update pending orders
            try {
                await dispatch(addPendingOrderAction(order))

                //Vider le panier & le client selectionner
                dispatch(removeCartAction())
                dispatch(updateSemiWholesalerSelectedAction(null))

                dispatch(openAlertAction("warning","Vente en attente, sera envoyée quand la connexion sera retablie !"))
                
                //aller à la page des ventes
                navigate('Ventes',{})
            } catch (error) {
                dispatch(openAlertAction("error","Une erreur est survenue !"))
            }
        }
    })
    
 }

 export  const  getSales =  () => async (dispatch,getState) => { 
    try {
        NetInfo.fetch()
        .then(async state=>{
            if (state.isInternetReachable) {
                const res = await axios.get(api+'order/getAllByWholesaler/'+getState().currentUserReducer.currentUser._id)

                // Update
                await dispatch(updateOrdersAction(res.data))
                dispatch(getSalesCount())
                // .then(async res =>{
                //     // Update
                //     await dispatch(updateOrdersAction(res.data))
    
                // })
                // .catch(error =>{
                // })
            } else {
                // // Récuperer les semi-grossistes sauvegardés
                // const semiWholesalersSaved = await getSemiWholesalersSaved()
    
                // // Update
                // dispatch(updateSemiWholesalersAction(semiWholesalersSaved))
            }
        }) 
    } catch (error) {
        console.log(error)
    }
    
    
 }

 export const sellPending =  (orders) => async (dispatch) => { 
    if (orders.length) {
        // console.log(orders)
        // alert(JSON.stringify(orders))
        NetInfo.fetch()
    .then(async state=>{
        if (state.isInternetReachable) {
            axios.post(api+'order/createMany/',orders)
            .then(async res =>{
                
                // Mise à jour
                await dispatch(getSales())

                //afficher message d'alert de succes
                dispatch(openAlertAction("success","Ventes en attente(s) et envoyée(s) avec succès !"))


            })
        }
    })
    }
    
    
 }

 export const getSalesCount = () => (dispatch,getState) => {
    NetInfo.fetch()
    .then(async state=>{
        if (state.isInternetReachable) {
            axios.get(api+'order/getAllByWholesalerNumber/'+getState().currentUserReducer.currentUser._id)
            .then(async res =>{
                dispatch(updateOrdersCounterAction(res.data))
            })
            .catch(error =>{
                console.log(error)
            })
        } else {
        }
    })
}

