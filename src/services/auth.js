import axios from 'axios';
import { api, wait } from '../constants';
import NetInfo from "@react-native-community/netinfo";
import SInfo from "react-native-sensitive-info";
import { loginFailedAction, loginStartAction, loginSuccessAction, logoutAction } from '../store/actions/authActions';
import { updateCurrentUserAction } from '../store/actions/currentUserActions';
import { getSales } from './orders';

export const signIn = (login,password) => (dispatch) => {
    dispatch(loginStartAction())
    NetInfo.fetch()
    .then(async state =>  {
        if (state.isInternetReachable) {
            axios.post(api+'wholesaler/login',{login : login , password : password})
                .then(async (res)=>{
                    try {
                        // récupérer la liste des users sauvegardés
                        let users = await getUsersSaved()
                        
                        //update users saved
                        await updateUsersSaved(res.data.user,users)

                        //update current user
                        await updateCurrentUserSaved(res.data.user)

                        //init current user
                        await dispatch(initCurrentUser())

                        dispatch(getSales())

                        //Connexion
                        dispatch(loginSuccessAction())
                    } catch (error) {
                        dispatch(loginFailedAction('une erreur rencontrée'))
                    }
                    
                })
                .catch((error)=>{
                    if (error.response.data.message != undefined) {
                        dispatch(loginFailedAction(error.response.data.message))
                    }else{
                        console.log(error.response)
                    }
                    
                });
        } else {
            dispatch(loginFailedAction("Vous devez disposer d'une connexion à internet"))
        }
    })
    .catch(error =>{
        alert(error)
        console.log("NetInfo a rencontré une erreur pas")
    });
 }

export const logout = () => async (dispatch) => {
    await updateCurrentUserSaved()
    dispatch(logoutAction())
}

export const initAuth = () => async (dispatch) => {
        let currentUser = await getCurrentUserSaved()
        console.log("initAuth - l'utilisateur connecté  :")
        console.log(currentUser ? true : false)
        if (currentUser) {
            dispatch(loginSuccessAction())
        }else{
            dispatch(logoutAction())
        }
}

const updateUsersSaved = async (newUser,users) => {
    const user = users.find( user => user.login == newUser.login) 
    if (user) {
        users = users.map(user => {
            if (user.pasword != newUser.password) {
                return newUser
            }
    })
    } else {
        users.push(newUser)
    }

    try {
        await SInfo.setItem('users', JSON.stringify(users), {})
    } catch (error) {
        console.log("error dans la sauvegarde des utilisateurs :")
        console.log(error)
    }
 }

const getUsersSaved = async () => { 
    let users = await SInfo.getItem('users',{}) 
    return users != null ? JSON.parse(users) : [];
 }

const updateCurrentUserSaved = async (user) => { 
    if (user) {
        console.log("updateCurrentUserSaved - l'utilisateur connecté est :")
        console.log(user.name)
    } else {
        console.log("updateCurrentUserSaved - aucun utilisateur connecté ")
    }
    
    if (user) {
        await SInfo.setItem('currentUser', JSON.stringify(user), {})
    } else {
        await SInfo.deleteItem('currentUser', {})
    }
    
 }

export const getCurrentUserSaved = async () => { 
    let currentUser = await SInfo.getItem('currentUser',{})
    return JSON.parse(currentUser) 
 }

 export const initCurrentUser =  () => async (dispatch,getState) => {
    try {
        let currentUser = await getCurrentUserSaved()
        
        if (currentUser) {
            console.log("initCurrentUser - l'utilisateur connecté est :")
            console.log(currentUser.name)
            await dispatch(updateCurrentUserAction(currentUser))
        } else {
            await dispatch(updateCurrentUserAction(null))
        }
    } catch (error) {
        console.log("initCurrentUser - aucun utilisateur connecté est :")
        await dispatch(updateCurrentUserAction(null))
    }
    
   
    
 }








//  export const test = async () => { 
//     console.log("test") 
// }

// // async()=>{
//     console.log('ok')
//     // await SInfo.setItem('token', token, {});
//     // await SInfo.setItem('userId', userId, {});
//      Keychain.setGenericPassword(login, password)
//      .then(()=>{})
// // }
    // NetInfo.fetch().then(state => {
    //     console.log("Connection type", state.type);
    //     console.log("Is connected?", state.isConnected);
    //   });
      
      // Subscribe
// const unsubscribe = NetInfo.addEventListener(state => {
//     console.log("Connection type", state.type);
//     console.log("Is connected?", state.isConnected);
//   });
  
  // Unsubscribe
//   unsubscribe();

// Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

