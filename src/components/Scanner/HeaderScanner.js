import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectSemiWholesaler from './../_partials/selectSemiWholesaler'

function HeaderScanner() {
  // useEffect(() => {
  // }, [])

  return (
      <View style={[styles.selectContainer]}><SelectSemiWholesaler bgColor="white" /></View>
  )
}

const styles = StyleSheet.create({
  selectContainer : {
      flexDirection : "row",
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
      padding : 10,
  }
})

export default HeaderScanner