import React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// partials
import HeaderBackButton from './_partials/HeaderBackButton'
// Components
import ProductScanner from '../components/Scanner/ProductScanner';
import ProductScanned from '../components/Scanner/ProductScanned';

const ProductScannerStack = createNativeStackNavigator();
const ProductScannerStackScreen = () => {
  return (
    <ProductScannerStack.Navigator
      initialRouteName="ProductScanner"
      screenOptions={({ route, navigation }) => ({
        headerLeft: (props) => (HeaderBackButton(navigation,props.canGoBack)),
        contentStyle : {
          padding : getFocusedRouteNameFromRoute(route) == "ProductScanned" ? 50  : 0 
        }
      })}
        
      >
        <ProductScannerStack.Group screenOptions={{
        headerTransparent: true
      }}>
        <ProductScannerStack.Screen
        name="ProductScanner"
        component={ProductScanner}
        options={{
          headerShown:false
        }}
      />
        </ProductScannerStack.Group>
      
      <ProductScannerStack.Group  screenOptions={{ presentation: 'modal', headerTitle : "" }}>
      <ProductScannerStack.Screen
        name="ProductScanned"
        component={ProductScanned}
        options={{
          headerStyle : {backgroundColor : "white",zIndex : 1000},
          headerShown : true, 
          headerShadowVisible : false,
          // presentation : "modal" 
        }}
      />
      </ProductScannerStack.Group>
      
    </ProductScannerStack.Navigator>
  )
}



export default ProductScannerStackScreen
