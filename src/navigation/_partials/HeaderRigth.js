import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { cartQtySelector } from '../../store/selectors/cartSelectors';

const HeaderRigth = ({navigation,cartQty}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate('Cart')}}>
        <View style={styles.cart}>
          <Text color='white' bold>{Math.floor(cartQty)}</Text>
        </View>
        <Ionicons name="cart" color={'white'} size={30} />
    </TouchableOpacity>
  )
  // ;
}

const styles = StyleSheet.create({
    container : {margin: 10},
    cart : {
        padding: 2,
        transform: [{translateX: 7}, {translateY: -7}],
        borderRadius: 50,
        minWidth: 20,
        height: 25,
        width : 25,
        position: 'absolute',
        backgroundColor: '#800000',
        right: 0,
        top: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})

const mapStateToProps = (state) => ({
  cartQty : cartQtySelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(HeaderRigth)
