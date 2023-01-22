import React from 'react'
import { FlatList,StyleSheet, View } from 'react-native'
import ListHeaderLastElements from './ListHeaderLastElements'
import LastSemiWholesalerItem from './LastSemiWholesalerItem'
import ErrorMessage from '../_partials/ErrorMessage'

function LastSemiWholesalersList({goTo,semiWholesalers}) {
    // let semiWholesalers = [] //{id:1,name:'clientName',idAccount:"clientId"}
  return (
    <View  style={styles.container}>
          <ListHeaderLastElements title={"Derniers clients"} icon={""} seeAll={goTo}/>
          <FlatList
                data = {semiWholesalers}
                renderItem={({item})=>(<LastSemiWholesalerItem semiWholesaler={item} />) }
                keyExtractor={item => item.name}
                // ListHeaderComponent={}
                // ListHeaderComponentStyle={styles.listHeaderStyle}
                horizontal
                showsHorizontalScrollIndicator={false}
                // stickyHeaderIndices={[0]}
                style={styles.list}
            />
            {!semiWholesalers.length ? <ErrorMessage message={"Auncun client ajouté"}/> : null}
      </View>
  )
}

const styles =  StyleSheet.create({
    container : {
        marginTop : 10,
        marginBottom : 10,
        flex : 1
    },
    list : {
        // margin : 10
    },
    listHeaderStyle : {
        // backgroundColor : 'white',
        // padding : 15
        flexDirection : "row"
    }
})


export default LastSemiWholesalersList