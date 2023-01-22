import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { isLoadingSelector } from '../../store/selectors/loadingSelectors';
import BouncingPreloader from 'react-native-bouncing-preloaders';

export const Loader = ({isLoading}) => {
    const [isMounted, setIsMounted] = useState(null);

    useEffect(() => {
        if (isMounted == null) { setIsMounted(true);}
    
        return () => { 
            setIsMounted(false)
        };
    }, [])
    
  return (
    isMounted == true ?(
    isLoading == true ?
    <View style={styles.container}>
        {/* <ActivityIndicator size="large" color="#f08080"/> */}
        <BouncingPreloader
            icons={[
                // 'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
                require('../../assets/cigarettes_.png'),
            ]}
            leftRotation="-40deg"
            rightRotation="-10deg"
            leftDistance={-50}
            rightDistance={-100}
            speed={1200} 
            size={100}/>
    </View>
    : null)
    :null
  )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : 'center',
        backgroundColor : "rgba(140, 19, 22, 0.7)",
        top : 0,
        bottom : 0,
        left : 0,
        right : 0,
        position : "absolute"
    },
    // loaderContainer : {
    //     flex: 6,
    //     justifyContent : 'flex-end',
    //     alignItems : 'center'
    // },
})


const mapStateToProps = (state) => ({
    isLoading : isLoadingSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(Loader)