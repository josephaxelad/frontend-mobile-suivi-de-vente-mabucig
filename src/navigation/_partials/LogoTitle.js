import React from 'react'
import { Image } from 'react-native'

function LogoTitle() {
  return (
    <Image
        style={{width: 50, height: 50, resizeMode: 'contain'}}
        source={require('../../assets/logo.png')}
      />
  )
}

export default LogoTitle


  