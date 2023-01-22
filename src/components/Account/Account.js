import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { Input, Button, Icon, Text } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { logoutAction } from '../../store/actions/authActions';
import ModalConf from '../_partials/modalConf'
import { getCurrentUser, logout } from '../../services/auth'
import { currentUserSelector } from '../../store/selectors/currentUserSelectors';
import { removeCartAction } from '../../store/actions/cartActions';

function Account({ currentUser }) {

  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(null);

  // useEffect(() => {
  //   if (isMounted == null) { setIsMounted(true); }

  //   return () => {
  //     setIsMounted(false)
  //   };
  // }, [])

  // Se déconnecter
  const _logout = () => {dispatch(removeCartAction());dispatch(logout())   }

  // Ouvrir le modal
  const openModal = () => { setModalVisible(true) };

  return (
    // isMounted == true ?
      <LinearGradient style={styles.container}
        colors={['white', "#efc4c4", '#efc4c4', '#efc4c4', 'white']}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.2, 0.5, 0.7, 1]}
      ><ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title} size={20} bold color='#800000'>Mon compte</Text>
            <Ionicons name="person" color='#800000' size={25} />
          </View>
          {currentUser != null ?
            <View>
              <View style={styles.infoContainer}>
                <View style={styles.card} >
                  <Text style={styles.cardItem}><Octicons color='#757575' name='number' size={25} /><Text muted bold size={20}> N° de compte : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{currentUser.idAccount}</Text></Text>
                  <Text style={styles.cardItem}><Ionicons color='#757575' name='person' size={25} /><Text muted bold size={20}> Nom : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{currentUser.name}</Text></Text>
                  <Text style={styles.cardItem}><Entypo color='#757575' name='login' size={25} /><Text muted bold size={20}> Login : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{currentUser.login}</Text></Text>
                  <Text style={styles.cardItem}><Entypo color='#757575' name='phone' size={25} /><Text muted bold size={20}> Téléphone : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{currentUser.phone}</Text></Text>
                  <Text style={styles.cardItem}><FontAwesome color='#757575' name='building' size={25} /><Text muted bold size={20}> Entreprise : </Text><Text numberOfLines={2} ellipsizeMode="tail" color='black' size={22} bold>{currentUser.company}</Text></Text>

                  <View style={styles.cardItem}><MaterialCommunityIcons color='#757575' name='office-building-marker' size={25} /><Text muted bold size={20}> Marchés : </Text>
                    {currentUser.markets.map((market) =>
                      <View key={market._id} style={styles.item} >
                        <Text color='white' size={15} bold>{market.name} </Text>
                      </View>)}
                  </View>
                  <View style={styles.cardItem}><FontAwesome color='#757575' name='building-o' size={25} /><Text muted bold size={20}> Agence : </Text>
                    <View style={styles.item} >
                      <Text color='white' size={15} bold>{currentUser.agency.city.name}</Text>
                    </View>
                  </View>
                  {currentUser.group ?
                    <View style={styles.cardItem}>
                      <MaterialCommunityIcons color='#757575' name='home-group' size={25} />
                      <Text muted bold size={20}> Groupe : </Text>
                      <View style={styles.item} >
                        <Text color='white' size={15} bold>{currentUser.group.name}</Text>
                      </View>
                    </View> : null}
                </View>

              </View>
              <View ><View style={styles.separator}></View></View>
              <View style={styles.btnLogoutContainer}>
                <Button style={styles.btnLogout} round color="#800000" onPress={() => openModal()}><Text color='white' size={20}>Déconnexion <MaterialCommunityIcons name='logout' size={20} /> </Text></Button>
              </View>
            </View>
            :
            <ActivityIndicator></ActivityIndicator>
          }
          <ModalConf
            body={"Voulez-vous vraiment vous déconnecter ?"}
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            confirm={() => { _logout() }}
          />
        </ScrollView>
      </LinearGradient>
      // : null
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  title: {
    paddingRight: 10,
  },
  infoContainer: {

  },
  infoItemContainer: {

  },
  infoItem: {
    borderColor: "white",
    backgroundColor: "transparent"
  },
  btnLogoutContainer: {
    flexDirection: "row"
  },
  btnLogout: {
    flex: 1,
  },
  btnLogoutText: {
    color: "white"
  },
  card: {
    // backgroundColor : "white",
    margin: 10,
    justifyContent: "center",
    // borderWidth : 1,
    // borderRadius : 10,
    padding: 10
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    // width : "100%",
    // marginVertical : 10

    borderColor: "#37302E",
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 5,
    backgroundColor: "white"
  },
  item: {
    justifyContent: "center",
    backgroundColor: "#f08080",
    borderRadius: 20,
    padding: 5,
    flexDirection: "row",
    //  marginHorizontal : 3
  },
  separator: {
    flex: 1,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10
  },
})

const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => { dispatch(logoutAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)




{/* <View style={styles.infoItemContainer}>
          <Input
            style={styles.infoItem}
            placeholder="Input with Icon on right"
            placeholderTextColor="black"
            right
            icon="heart"
            family="antdesign"
            iconSize={14}
            iconColor="red"
            editable={false}
          /></View> */}