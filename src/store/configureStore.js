// Store/configureStore.js

import { createStore, combineReducers , applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import currentUserReducer from './reducers/currentUserReducer'
import semiWholesalersReducer from './reducers/semiWholesalersReducer'
import scannedProductReducer from './reducers/scannedProductReducer'
import productsReducer from './reducers/productsReducer'
import semiWholesalerSelectedReducer from './reducers/semiWholesalerSelectedReducer'
import {cartReducer,cartDataReducer} from './reducers/cartReducer'
import ordersReducer from './reducers/ordersReducer'
import ordersCountReducer from './reducers/ordersCountReducer'
import loadingReducer from './reducers/loadingReducer'
import { createRealmPersistStorage } from "@bankify/redux-persist-realm";
import { composeWithDevTools } from 'remote-redux-devtools';

import { persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: createRealmPersistStorage(),
  blacklist : ["loadingReducer"]
}

// export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}))

// const persistor = persistStore(store, { storage: createRealmPersistStorage() });
// const composeEnhancers = composeWithDevTools({ realtime: true, port: 9000 });
export default createStore(persistCombineReducers(rootPersistConfig,{authReducer,alertReducer,currentUserReducer,
    semiWholesalersReducer,scannedProductReducer,productsReducer,
    semiWholesalerSelectedReducer,cartReducer,cartDataReducer,ordersReducer,loadingReducer,ordersCountReducer}), applyMiddleware(thunk))

// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './reducers/authReducer' , applyMiddleware(thunk)

// export const store = configureStore({
//   reducer: {
//     isAuth : authReducer
//   }
// })