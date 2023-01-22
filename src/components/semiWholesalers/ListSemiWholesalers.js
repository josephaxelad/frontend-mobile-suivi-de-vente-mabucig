import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Empty from '../_partials/Empty'
import ItemSemiWholesaler from './ItemSemiWholesaler'
import ListHeaderSemiWholesaler from './ListHeaderSemiWholesaler'
import { connect, useDispatch } from 'react-redux'
import { semiWholesalersSelector } from '../../store/selectors/semiWholesalersSelectors'
import { getSemiWholesalers } from '../../services/semiWholesalers';

function ListSemiWholesalers(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            dispatch(getSemiWholesalers())
        }
        return () => mounted = false;
    }, [])

    const [filtredSemiWholesalers, setFiltredSemiWholesalers] = useState(props.semiWholesalers)
    // filtredSemiWholesalers

    const search = (x) => {
        const filtred = props.semiWholesalers.filter((semiWholesaler) => {
            if (semiWholesaler.name.toLowerCase().indexOf(x.toLowerCase()) != -1) {
                return true
            } else {
                return false
            }
        })
        setFiltredSemiWholesalers(filtred)
    }
    return (
        <View  >
            <FlatList
                data={filtredSemiWholesalers}
                renderItem={({ item }) => (<ItemSemiWholesaler semiWholesaler={item} onPress={() => { props.onItemPress(item) }} />)}
                keyExtractor={item => item.name}
                ListHeaderComponent={<ListHeaderSemiWholesaler search={search} />}
                ListHeaderComponentStyle={styles.listHeaderStyle}
                stickyHeaderIndices={[0]}
                ListEmptyComponent={<Empty message="Aucun client trouvé!" />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    listHeaderStyle: {
        backgroundColor: 'white',
        padding: 15,
    }
})



const mapStateToProps = (state) => ({
    semiWholesalers: semiWholesalersSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(ListSemiWholesalers)