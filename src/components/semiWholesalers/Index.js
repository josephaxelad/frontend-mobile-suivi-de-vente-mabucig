import React, { useEffect } from 'react'
import { View, StyleSheet, Image,  } from 'react-native'
import { Button, Card , Text} from 'galio-framework';
// import { useNavigation } from '@react-navigation/native';
import ListSemiWholesalers from './ListSemiWholesalers'
import { getSemiWholesalers } from '../../services/semiWholesalers';
import { useDispatch } from 'react-redux';


function SemiWholesalers(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getSemiWholesalers())
    }
    return () => mounted = false;
  }, [])
  

  const goToDetailSemiWholesalers = (semiWholesaler) => { 
    delete semiWholesaler._id
    delete semiWholesaler.address.city._id
    props.navigation.navigate('DetailSemiWholesalers',{ semiWholesaler: semiWholesaler })
  }

  return (
    <View style={styles.container}>
      {/* <Button onPress={()=>{dispatch(getSemiWholesalers())}}>getSemiWholesalers</Button> */}
      <ListSemiWholesalers  onItemPress={goToDetailSemiWholesalers}/>
    </View>
    
  )
}

const styles =  StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    // borderTopRightRadius : 20,
    // borderTopLeftRadius : 20,
    // marginTop : 0,
    // zIndex : 9000
  }
})


export default SemiWholesalers;