import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'galio-framework';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect, useDispatch } from 'react-redux';
import { sellPending } from '../../services/orders';
import { ordersPendingSelector } from '../../store/selectors/ordersSelector';
import { currentUserSelector } from '../../store/selectors/currentUserSelectors';

function Connectivity({salesPending}) {
    const [isMounted, setIsMounted] = useState(null);
    const [isConnected, setConnected] = useState(false)
    const [isShow, setIsShow] = useState(false)
    
    const dispatch = useDispatch()
    const _handleConnectivityChange  =  (isConnected,isInternetReachable)  => {
        setConnected(isInternetReachable);
     }

    useEffect(() => {
        if (isMounted == null) { setIsMounted(true);}
        
        setTimeout(() => {
            dispatch(sellPending(salesPending))
        }, 1000);
        

        NetInfo.addEventListener(state => {
            setIsMounted(true);
            _handleConnectivityChange(state.isConnected,state.isInternetReachable)
            if (state.isInternetReachable==false) {
                setIsShow(true)
            }
        })

        return () => { 
            setIsMounted(false)
        };
    }, [isConnected,isShow])

    
    function  IsConnectedView({isShow, setIsShow,isConnected}) {
        if (isShow==true) {
            if (isConnected == true) {
                // dispatch(sellPending(salesPending))
                setTimeout(() => {
                    setIsShow(false)
                }, 3000);
                
                return(<View style={styles.online}><MaterialCommunityIcons name='signal'  color="white" /><Text color='white'> Connexion internet rétablie!</Text></View>)
            } else {
                return(<View style={styles.offline}><MaterialCommunityIcons name='signal-off' color="white"  /><Text color='white'> Mode hors-ligne!</Text></View>) 
            }
        }else{  
            return null
        }
        // return( 
        // <View>
        //     <View style={styles.offline}><MaterialCommunityIcons name='signal-off' color="white" size={15}  /><Text color='white' bold italic> Mode hors-ligne!</Text></View>
        // <View style={styles.online}><MaterialCommunityIcons name='signal'  color="white" size={15} /><Text color='white' bold italic> Vous êtes connecté!</Text></View>
        // </View>)
     }
    
    return(
        isMounted == true ?
        <IsConnectedView  isShow={isShow} setIsShow={setIsShow} isConnected={isConnected} setConnected={setConnected} />
        :null         
    )
    
    
}

const styles = StyleSheet.create({

    offline : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#f97c00",
    },
    online : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "green",
    }
})
const mapStateToProps = (state) => ({
    salesPending : ordersPendingSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(Connectivity)