import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Input, Button, Icon  } from 'galio-framework';
import { signIn } from '../services/auth';

import { connect } from 'react-redux'
import Alert from './_partials/Alert';
import ErrorMessage from './_partials/ErrorMessage';

function Login(props) {

  const [errorMessage, setErrorMessage] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  // Se connecter
  const _signIn = (login,password) => {
    setErrorMessage(false)
    if (login,password) {   
      props.dispatch(signIn(login.toLowerCase(),password))
    } else{
      setErrorMessage("Veuillez entrer toutes les informations svp!")
    }
  }

  return (
    //Login
    <View style={styles.container}>
        <View style={[styles.login_container]}>
        {/* Logo */}
        <View style={[styles.logo_container]}><Image style={styles.logo} source={require('../assets/logo.png')} /></View>
        {/* Text : connectez vous ... */}
        <View style={[styles.text_container]}>
         <Text  style={[styles.text,{color : "gray"}]}>Connectez-vous à l'application</Text>
        </View>
        {/* Formulaire */}
        <View style={[styles.formulaire]}>
            {/* inputs */}
            <View >
              <Input placeholderTextColor="#f08080" rounded placeholder="Identifiant" right icon="user" family="antdesign" iconSize={14} iconColor="black"
              onChangeText={(login) => setLogin(login)}
              value={login}/>
              <Input  placeholderTextColor="#f08080" placeholder="Mot de passe" rounded password viewPass  
              onChangeText={(password) => setPassword(password)} 
              value={password}/>
            </View>
          <ErrorMessage message={errorMessage}/>
          <ErrorMessage message={errorMessage ? false : props.isAuth.error}/> 
            {/* Bouton Connexion */}
            <View style={styles.btn_connexion_container}>
              <Button uppercase loading={props.isAuth.isLoading}  color="#800000" onPress={()=>_signIn(login,password)} >Se connecter</Button>
              <Icon name="pin-3" family="Galio" size={10} />
            </View>
        </View>
        </View>    
    </View> 
  )
}

const styles = StyleSheet.create({
  row : {
    flex :1
  },
  container : {
     backgroundColor : '#f08080' , //d3d1d1
     flex: 1,
     justifyContent : 'center',
     alignItems : 'center'
  },
  login_container: {
    backgroundColor :  '#ffffff' ,
    // width : '80%',
    // height : '55%',
    borderRadius : 25,
    paddingHorizontal : 15
  },
  logo_container: {
    // flex : 1,
    justifyContent : 'center',
     alignItems : 'center'
  },
  logo: {
    height : 100,
    width : 100,
    resizeMode : 'contain'
  },
  text_container: {
    // flex : 1,
    justifyContent : 'center',
     alignItems : 'center'
  },
  text: {
    fontSize : 20
  },
  formulaire: {
    // flex : 3,
  },
  btn_connexion_container : {
    justifyContent : 'center',
    alignItems: "center",
    marginTop : 20
  }
})

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
}

export default connect(mapStateToProps)(Login)

