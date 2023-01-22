/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login';
import Navigation from './src/navigation/Navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store from './src/store/configureStore';
import Alert from './src/components/_partials/Alert';
import { Toast } from 'galio-framework';
import Connectivity from './src/components/_partials/Connectivity';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react';
import Loader from './src/components/_partials/Loader';


//
export default  function App() {
  let persistor = persistStore(Store)
  
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider >
          <Navigation />
          <Connectivity/>
          <Alert/>
          <Loader/>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
