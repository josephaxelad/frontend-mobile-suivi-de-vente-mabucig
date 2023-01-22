// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeStringValue = async (key,value) => {
//   try {
//     await AsyncStorage.setItem(key, value)
//   } catch(e) {
//     // save error
//   }

// }


// export const storeObjectValue = async (key,value) => {
//     try {
//       const jsonValue = JSON.stringify(value)
//       await AsyncStorage.setItem(key, jsonValue)
//     } catch(e) {
//       // save error
//     }
  
//   }

  
// export const getMyStringValueStored = async (key) => {
//     try {
//       return await AsyncStorage.getItem(key)
//     } catch(e) {
//       // read error
//     }
  
  
//   }

// export const getMyObjectStored = async (key) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(key)
//     return jsonValue != null ? JSON.parse(jsonValue) : null
//   } catch(e) {
//     // read error
//   }


// }

// export const removeFew = async (keys) => {
//     // const keys = ['@MyApp_USER_1', '@MyApp_USER_2']
//     try {
//       await AsyncStorage.multiRemove(keys)
//     } catch(e) {
//       // remove error
//     }
  
//   }

