import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, StatusBar, ScrollView } from 'react-native'
import { Button, Toast } from 'galio-framework'
import Header from './Header';
import StatItem from './StatItem'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LastSalesList from './LastSalesList';
import LastSemiWholesalersList from './LastSemiWholesalersList';
import ErrorMessage from '../_partials/ErrorMessage';
import Alert from '../_partials/Alert';
import { connect, useDispatch } from 'react-redux'
import { openAlertAction } from '../../store/actions/alertActions';
import { semiWholesalersCountSelector, semiWholesalersLastSelector } from '../../store/selectors/semiWholesalersSelectors'
import { useEffect } from 'react';
import { getSemiWholesalers } from '../../services/semiWholesalers';
import { ordersLastSelector } from '../../store/selectors/ordersSelector';
// import {ordersCountSelector } from '../../store/selectors/ordersSelector';
import { ordersCountSelector } from '../../store/selectors/ordersCountSelectors';
import { currentUserSelector } from '../../store/selectors/currentUserSelectors';
import { getSales } from '../../services/orders';
import { getProducts } from '../../services/products';

const statItems = [
  { colors: ['#FFCB00', '#FFA500', '#FFDB00'], name: 'Clients', qty: 0, icon: <FontAwesome5 name="users" color="#800000" size={20} /> },
  { colors: ['#0029DE', '#002975', '#0029FF'], name: 'Ventes', qty: 0, icon: <FontAwesome5 name="coins" color="#800000" size={20} /> }
]

function Home(props) {

  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getProducts())
      dispatch(getSemiWholesalers())
      dispatch(getSales())
    }
    return () => mounted = false;
  }, [])

  const goToSemiWholesalers = () => { props.navigation.navigate('Clients') }
  const goToSales = () => { props.navigation.navigate('Ventes') }

  return (
    <ScrollView style={styles.container}>
      <Header currentUser={props.currentUser}></Header>
      <View style={styles.row}>
        <StatItem key={statItems[0].name} colors={statItems[0].colors} name={statItems[0].name} qty={props.numberOfSemiWholesalers} icon={statItems[0].icon} />
        <StatItem key={statItems[1].name} colors={statItems[1].colors} name={statItems[1].name} qty={props.numberOfSales} icon={statItems[1].icon} />
      </View>
      <View style={styles.row}>
        <LastSalesList sales={props.sales} goTo={goToSales} />
      </View>
      <View style={styles.row}>
        <LastSemiWholesalersList semiWholesalers={props.semiWholesalers} goTo={goToSemiWholesalers} />
      </View>
      {/* <Button onPress={()=>{alert("test") }} color='success'>test</Button>
      <Button onPress={()=>{props.openAlert('success' , 'pp  aaaaaaaaaa aaaaaaaaaaa aaaa  ppssss') }} color='success'>success</Button>
      <Button onPress={()=>{props.openAlert('warning' , 'coucou') }} color='warning'>warning</Button>
      <Button onPress={()=>{props.openAlert('error' , 'coucou') }} color='danger'>error</Button>         */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 10,

  },
  row: {
    flexDirection: "row",
    // flex : 1,
  },
  // statItem : {
  //   flexDirection : "column",
  //   flex : 1,
  //   backgroundColor : "red"

  // }
});

const mapStateToProps = (state) => ({
  numberOfSemiWholesalers: semiWholesalersCountSelector(state),
  semiWholesalers: semiWholesalersLastSelector(state),
  numberOfSales: ordersCountSelector(state),
  sales: ordersLastSelector(state),
  currentUser: currentUserSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  openAlert: (type, message) => { dispatch(openAlertAction(type, message)) },
  closeAlert: (type, message) => { dispatch(openAlertAction(type, message)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)



  // const mapStateToProps = state => {
  //   return {
  //     // isAuth: state.authReducer.isAuth,
  //     state
  //   };
  // };connect(mapStateToProps)(