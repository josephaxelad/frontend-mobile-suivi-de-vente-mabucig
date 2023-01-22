import React from 'react'
import { StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// Partials
import LogoTitle from './_partials/LogoTitle'
import HeaderRigth from './_partials/HeaderRigth'
// Components
import Home from '../components/Home/Home';
import SemiWholesalersStackScreen from './SemiWholesalersStackScreen'
import ProductScannerStackScreen from './ProductScannerStackScreen'
import Sales from '../components/sales/Index';
import Account from '../components/Account/Account';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={({navigation})=>({
        tabBarActiveTintColor: '#800000',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {fontSize: 40},
        headerShown: true,
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {backgroundColor: '#f08080'},
        headerRight: props => (<HeaderRigth navigation={navigation}/>        ),
        // headerBackVisible: false,
        // headerLeft: (props) => (HeaderBackButton(navigation,props.canGoBack)),
      })
      }>
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="home" color={color} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Clients"
        component={SemiWholesalersStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <FontAwesome name="group" color={color} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ProductScannerStackScreen}
        options={({ route, navigation }) => ({
          headerTransparent : true ,
          headerShown : getFocusedRouteNameFromRoute(route) == "ProductScanned" ? false : true,
          tabBarIconStyle: false,
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.scanner}>
                <Ionicons name="scan-circle-outline" color="white" size={35} />
              </View>
            );
          },
          })}
        // options={{  
        //   headerTransparent : true,
        //   tabBarIconStyle: false,
        //   tabBarLabel: '',
        //   tabBarIcon: ({focused, color, size}) => {
        //     return (
        //       <View style={styles.scanner}>
        //         <Ionicons name="scan-circle-outline" color="white" size={35} />
        //       </View>
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name="Ventes"
        component={Sales}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesome5
                name="coins" //file-invoice-dollar
                color={color}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Mon compte"
        component={Account}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="person" color={color} size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  scanner: {
    borderRadius: 50,
    backgroundColor: '#800000', //d3d1d1
    width: '80%',
    //    height : '80%',
    top: -10,
    bottom: -10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MainTabScreen

