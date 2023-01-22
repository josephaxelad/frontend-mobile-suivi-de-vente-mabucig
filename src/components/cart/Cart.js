import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CartItem from './CartItem'
import HeaderCart from './HeaderCart'
import FootCart from './FootCart'
import Empty from '../_partials/Empty'
import { Button, Text } from 'galio-framework'
import { generateBoxShadowStyle } from './../../helpers/boxShadow'
import { connect } from 'react-redux'
import { cartSelector } from '../../store/selectors/cartSelectors'

function Cart({ navigation, cart }) {

    // const [cart, updateCart] = useState([{id:1,name:'clientName',idAccount:"clientId"},{id:2,name:'clientName',idAccount:"clientId"},{id:3,name:'clientName',idAccount:"clientId"},{id:4,name:'clientName',idAccount:"clientId"}]) //[{id:1,name:'clientName',idAccount:"clientId"},{id:2,name:'clientName',idAccount:"clientId"},{id:3,name:'clientName',idAccount:"clientId"},{id:4,name:'clientName',idAccount:"clientId"}]
    
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => (<CartItem cartItem={item} />)}
                keyExtractor={item => item.product._id}
                ListHeaderComponent={<HeaderCart cart={cart} />}
                ListHeaderComponentStyle={styles.listHeaderStyle}
                stickyHeaderIndices={[0]}
                style={styles.list}
                ListEmptyComponent={
                    <View style={styles.ListEmptyComponent} >
                        <Empty message={"Le panier est vide !"} />
                        <View style={styles.row}>
                            <Button onPress={() => navigation.navigate('Main', { screen: 'Scanner' })} style={[styles.ButtonToSell, generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717')]} round color="#800000">
                                <Text bold color='white' size={20}>Ajouter des cartons au panier</Text>
                            </Button>
                        </View>
                    </View>
                }
            />
            <FootCart cart={cart} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    list: {
        // margin : 10
    },
    listHeaderStyle: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: "row"
    },
    ListEmptyComponent: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    ButtonToSell: {
        flex: 1,
        padding: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        // flex : 1
    },

})

const mapStateToProps = (state) => ({
    cart: cartSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(Cart)