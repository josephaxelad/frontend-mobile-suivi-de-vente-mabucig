import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
// Components
import MainStackScreen from './MainStackScreen';
import LoginStackScreen from './LoginStackScreen';
import StartPageLoaderStackScreen from './StartPageLoaderStackScreen'
//Selector
import {isAuthSelector} from '../store/selectors/authSelectors'
import { initAuth, initCurrentUser } from '../services/auth';
import { currentUserSelector } from '../store/selectors/currentUserSelectors';
import { navigationRef } from '../helpers/RootNavigation';


function Navigation(props) {


  useEffect(() => {
    props.dispatch(initCurrentUser())
    props.dispatch(initAuth())
  }, [])
  
  
  return (
    <NavigationContainer ref={navigationRef}>
      {props.isAuth.value === true ? 
       <MainStackScreen/>  
      : (
        props.isAuth.value === false ? <LoginStackScreen/> : <StartPageLoaderStackScreen/>
      )}
    </NavigationContainer>
  );
}


const mapStateToProps = state => ({
    isAuth: isAuthSelector(state),
    currentUser : currentUserSelector(state),
});



export default connect(mapStateToProps)(Navigation);


