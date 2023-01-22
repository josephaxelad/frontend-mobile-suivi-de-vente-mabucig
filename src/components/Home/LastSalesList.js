import React from 'react'
import { FlatList,StyleSheet, View } from 'react-native'
import ListHeaderLastElements from './ListHeaderLastElements'
import LastSaleItem from './LastSaleItem'
import ErrorMessage from '../_partials/ErrorMessage'

function LastSalesList({goTo,sales}) {
  return (
      <View  style={styles.container}>
          <ListHeaderLastElements title={"Dernières ventes"} icon={""} seeAll={goTo}/>
          <FlatList
                data = {sales}
                renderItem={({item})=>(<LastSaleItem sale={item} />) }
                keyExtractor={item => item._id}
                // ListHeaderComponent={}
                // ListHeaderComponentStyle={styles.listHeaderStyle}
                horizontal
                showsHorizontalScrollIndicator={false}
                // stickyHeaderIndices={[0]}
                style={styles.list}
                // ListEmptyComponent={}
            />
            {!sales.length ? <ErrorMessage message={"Auncune vente effectuée"}/> : null}
      </View>
    
  )
}

const styles =  StyleSheet.create({
    container : {
        marginTop : 10,
        marginBottom : 10,
        flex : 1,
    },
    list : {
        // margin : 10
        // width : "100%"
        
    },
    listHeaderStyle : {
        // backgroundColor : 'white',
        // padding : 15
        flexDirection : "row"
    }
})

export default LastSalesList