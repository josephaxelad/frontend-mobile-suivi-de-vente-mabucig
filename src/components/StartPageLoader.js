import React from 'react'
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import BouncingPreloader from 'react-native-bouncing-preloaders';

function StartPageLoader() {
  return (
    <View style={styles.container}>
        <View style={styles.loaderContainer}>
            <BouncingPreloader
                icons={[
                    // 'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
                    // require('./../assets/cigarretes.png'),
                    require('./../assets/cigarettes_.png'),
                    
                ]}
                leftRotation="-40deg"
                rightRotation="-10deg"
                leftDistance={-50}
                rightDistance={-100}
                speed={1200} 
                size={100}/>
            <Image style={{ width: 75, resizeMode : 'contain' }}  source={require('./../assets/ombre.png')}/>
        </View>
        
        <View style={styles.logoContainer}>
            <ActivityIndicator  size="small" color="#f08080" />
            <View style={{ width: 75 , flexDirection: "row"}} >
                <Image style={{ flex : 1, resizeMode : 'contain'}}  source={require('./../assets/logo.png')}/>
            </View>
            
        </View>
    </View>
  )
}

// leftRotation="-680deg"
//             rightRotation="360deg"
//             leftDistance={-180}
//             rightDistance={-250}
//             speed={1200} />

const styles = StyleSheet.create({
    container : {
       backgroundColor : '#d3d1d1' , //d3d1d1 f08080
       flex: 1,
       justifyContent : 'center',
       alignItems : 'center'
    },
    loaderContainer : {
        flex: 6,
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    logoContainer : {
        flex: 4,
        justifyContent : 'flex-end',
        alignItems : 'center'
    }
  })
export default StartPageLoader