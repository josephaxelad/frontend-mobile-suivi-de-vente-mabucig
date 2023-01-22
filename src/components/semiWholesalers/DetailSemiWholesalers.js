import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import {Block, Card, Icon, Text} from 'galio-framework'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function DetailSemiWholesalers({route : { params : {semiWholesaler}}}) {

  return (
    
    <LinearGradient style={styles.container}
    colors={['white',"#efc4c4", '#efc4c4', '#efc4c4','white']}
    start={{ x: 1, y: 1 }}
    end={{ x: 1, y: 0 }}
    locations={[0, 0.2,0.5,0.7, 1]}
    ><ScrollView>
        <View>
            <View><Text italic style={styles.title} size={20} bold color='#f08080' >Information personnelles</Text></View>
            <View style={styles.card} >
                <View style={styles.cardItem}><Text ><Octicons color='#757575' name='number' size={25}/><Text muted bold size={20}> N° de compte : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.idAccount}</Text></Text></View>
                <View style={styles.cardItem}><Text ><Ionicons color='#757575' name='person' size={25}/><Text muted bold size={20}> Nom : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.name}</Text></Text></View>
                {semiWholesaler.phone1 ? <View style={styles.cardItem}><Text><Entypo color='#757575' name='phone' size={25}/><Text muted bold size={20}> Téléphone 1 : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.phone1}</Text></Text></View>: null}
                {semiWholesaler.phone2 ? <View style={styles.cardItem}><Text><Entypo color='#757575' name='phone' size={25}/><Text muted bold size={20}> Téléphone 2 : </Text><Text numberOfLines={1} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.phone2}</Text></Text></View>: null}
            </View>
        </View>
        <View ><View style={styles.separator}></View></View>
        <View>
            <View><Text italic style={styles.title} size={20} bold color='#f08080'>Adresse</Text></View>
            <View style={styles.card} >
                <View style={styles.cardItem}><Text><Entypo color='#757575' name='location' size={25}/><Text muted bold size={20}> Adresse : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.address.name}</Text></Text></View>
                <View style={styles.cardItem}><Text><Entypo color='#757575' name='address' size={25}/><Text muted bold size={20}> Quartier : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{semiWholesaler.address.neighborhood}</Text></Text></View>
                <View style={styles.cardItem}><Text><FontAwesome5 color='#757575' name='city' size={25}/><Text muted bold size={20}> Ville : </Text>
                <View style={styles.item}>
                    <Text  color='white' size={15} bold>{semiWholesaler.address.city.name}</Text>
                </View>
                </Text></View>
            </View>
        </View>
        </ScrollView> 
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 75,
        backgroundColor : "white"
    },
    card : {
        // backgroundColor : "white",
        margin : 10,
        justifyContent : "center",
        // borderWidth : 1,
        // borderRadius : 10,
        padding : 10
    },
    cardItem : {
       flexDirection : "row",
       alignItems : "center",
       width : "100%",

       borderColor : "#37302E",
       borderWidth : 2,
       borderRadius : 4,
       paddingHorizontal : 10,
       paddingVertical : 3,
       marginVertical : 5,
       backgroundColor : "white"
    },
    title : {
        paddingHorizontal : 20
    },
    separator : {
        flex : 1,
        borderBottomColor : "white",
        borderBottomWidth : 2,
        marginHorizontal : 20,
        marginVertical : 10
    },
    item : {
        backgroundColor : "#f08080",
        borderRadius : 20,
        padding : 5,
        flexDirection : "row",
        // marginHorizontal : 3
      }
})


export default DetailSemiWholesalers;