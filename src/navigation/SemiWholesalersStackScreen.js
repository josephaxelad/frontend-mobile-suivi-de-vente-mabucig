import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// partials
import HeaderBackButton from './_partials/HeaderBackButton'
    // import LogoTitleDetailSemiWholesalers from '../components/semiWholesalers/LogoTitleDetailSemiWholesalers'
// Components
import SemiWholesalers from '../components/semiWholesalers/Index';
import DetailSemiWholesalers from '../components/semiWholesalers/DetailSemiWholesalers';

const SemiWholesalersStack = createNativeStackNavigator();
const SemiWholesalersStackScreen = () => {
  return (
    <SemiWholesalersStack.Navigator
      initialRouteName="SemiWholesalers"
      screenOptions ={ ({navigation}) =>({
        headerTransparent: true,
        headerBackVisible: false,
        headerLeft: (props) => (HeaderBackButton(navigation)),
        
      })}>
      <SemiWholesalersStack.Screen
        name="SemiWholesalers"
        component={SemiWholesalers}
        options={{
          headerShown:false
        }}
      />
      <SemiWholesalersStack.Screen
        name="DetailSemiWholesalers"
        component={DetailSemiWholesalers} //LogoTitleDetailSemiWholesalers
        options={({ route }) => ({
          headerTitle : "",
          headerShown:true
          // headerTitle : () => <LogoTitleDetailSemiWholesalers semiWholesaler={route.params.semiWholesaler} /> 
        })}
        // options={{ headerTitle: (props) => <LogoTitleDetailSemiWholesalers {...props} a={props.children} /> }}
      />
    </SemiWholesalersStack.Navigator>
  )
}

export default SemiWholesalersStackScreen