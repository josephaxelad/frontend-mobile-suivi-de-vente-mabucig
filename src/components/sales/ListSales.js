import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, Button } from 'react-native'
import ItemSale from './ItemSale'
import ListHeaderSale from './ListHeaderSale'
import Empty from '../_partials/Empty'
import { connect, useDispatch } from 'react-redux'
import { ordersSelector } from '../../store/selectors/ordersSelector'
import Modal from "react-native-modal";
import DetailsSale from './DetailsSale'
import { Text } from 'galio-framework'
import { getSales } from '../../services/orders'

function ListSales({ sales }) {
  // let sales = [{id : 1},{id : 2},{id : 3},{id : 4},{id : 5},{id : 6},{id : 7}]
  const [isModalVisible, setModalVisible] = useState(false);
  const [sale, setSale] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getSales())
    }
    return () => mounted = false;
  }, [])



  const openModal = (sale) => {
    setSale(sale)
    if (sale != null) {
      setModalVisible(true);
    }

  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        data={sales}
        renderItem={({ item }) => (<ItemSale sale={item} openModal={openModal} />)}
        keyExtractor={item => item._id}
        ListHeaderComponent={ListHeaderSale}
        ListHeaderComponentStyle={styles.listHeaderStyle}
        // StickyHeaderComponent={ListHeaderSale}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={<Empty message={"Aucune vente trouvée"} />}
      />
      <Modal animationIn={"bounceInUp"} isVisible={isModalVisible} onSwipeComplete={() => { closeModal() }} onBackdropPress={() => { closeModal() }}>
        <DetailsSale sale={sale} close={closeModal} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  listHeaderStyle: {
    backgroundColor: 'white',
    padding: 15

  }
})
const mapStateToProps = (state) => ({
  sales: ordersSelector(state)
})

const mapDispatchToProps = {}



export default connect(mapStateToProps)(ListSales)