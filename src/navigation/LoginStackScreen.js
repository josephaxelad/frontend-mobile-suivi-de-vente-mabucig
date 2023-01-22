import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Partials
import Login from '../components/Login';

const LoginStack = createNativeStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  )
}

export default LoginStackScreen