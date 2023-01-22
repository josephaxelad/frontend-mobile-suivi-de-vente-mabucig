import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Componenents
import StartPageLoader from '../components/StartPageLoader';

const StartPageLoaderStack = createNativeStackNavigator();
const StartPageLoaderStackScreen = () => {
  return (
    <StartPageLoaderStack.Navigator screenOptions={{headerShown: false}}>
        <StartPageLoaderStack.Screen
        name="StartPageLoader"
        component={StartPageLoader}
        />
    </StartPageLoaderStack.Navigator>
  )
}

export default StartPageLoaderStackScreen