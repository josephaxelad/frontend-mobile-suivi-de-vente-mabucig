import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Partials
import LogoTitle from './_partials/LogoTitle'
import HeaderBackButton from './_partials/HeaderBackButton'
// Components
import MainTabScreen from './MainTabScreen'
import Cart from '../components/cart/Index';

const MainStack = createNativeStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen
            name="Main"
            component={MainTabScreen}
            options={{
              headerLeftContainerStyle : {backgroundColor: '#f08080',padding : 25},
              headerLeft: (props) => (
                <HeaderBackButton
                // style ={{backgroundColor : "#800000"}}
                //   {...props}
                //   onPress={() => {
                //     // Do something
                //   }}
                />
              ),
            }}
            //  options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <MainStack.Screen
            name="Cart"
            component={Cart}
            options={({navigation})=>({
              headerShown: true,
              headerTitle: props => <LogoTitle {...props} />,
              headerStyle: {backgroundColor: '#f08080'},
              headerBackVisible: false,
              headerLeft: (props) => (HeaderBackButton(navigation,props.canGoBack)),
            }) }
          />
        </MainStack.Navigator>
  )
}

export default MainStackScreen