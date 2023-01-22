import React, { useState } from 'react'
import { Icon, Text, Toast } from 'galio-framework'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { alertSelector } from '../../store/selectors/alertSelectors';
import { closeAlertAction } from '../../store/actions/alertActions';

function Alert({alert,closeAlertAction}) {

  const closeAlert = () => { 
    closeAlertAction()
  }
  
  const closeWithDelay = (delay) => { setTimeout(() => {
    closeAlertAction()
  }, delay);  }

  if (alert) {
    switch (alert.type) {
      case "success":
        closeWithDelay(5000) 
        return (
          <View style={[styles.container,styles.success]}>
            <Icon style={styles.icon} size={30} color={"#007E33"} name="check-circle" family="FontAwesome" />
            <Text size={15} style={styles.text} color='white'>{alert.message}</Text>
            <TouchableOpacity onPress={()=>closeAlert()} style={styles.close}><Icon size={20} color='white' name="closecircleo" family="AntDesign" /></TouchableOpacity>
          </View>
        )
        break;

      case "warning":
        closeWithDelay(5000) 
        return (
          <View style={[styles.container,styles.warning]}>
            <Icon  name="warning" color='#FF8800' size={30} family="FontAwesome" style={styles.icon} />
            <Text  size={15} color='white'  style={styles.text} >{alert.message}</Text>
            <TouchableOpacity  onPress={()=>closeAlert()}  style={styles.close}><Icon size={20} color='white' name="closecircleo" family="AntDesign"/></TouchableOpacity>
          </View>
        )
        break;
    
      case "error":
        closeWithDelay(5000) 
        return (
          <View style={[styles.container,styles.error]}>
            <Icon style={styles.icon} size={30} color={"#CC0000"} name="error" family="MaterialIcons" />
            <Text size={15} style={styles.text} color='white'>{alert.message}</Text>
            <TouchableOpacity onPress={()=>closeAlert()} style={styles.close}><Icon size={20} color='white' name="closecircleo" family="AntDesign" /></TouchableOpacity>
          </View>
        )

      default:
        // closeWithDelay(5000)
        return (
          // <View style={[styles.container,styles.success]}>
          //   <Icon style={styles.icon} size={30} color={"#007E33"} name="check-circle" family="FontAwesome" />
          //   <Text size={15} style={styles.text} color='white'>{alert.message}</Text>
          //   <TouchableOpacity onPress={()=>closeAlert()} style={styles.close}><Icon size={20} color='white' name="closecircleo" family="AntDesign" /></TouchableOpacity>
          // </View>
          null
        )
        break;
    }
  } else {
    return null
  }
  
  
}

const styles = StyleSheet.create({
  container : {
    flexDirection : "row",
    alignItems : "center",
    flex : 1,
    height : 63,
    padding : 10,
    position : "absolute",
    // top : 50,
    left : 0,
    right : 0,
    bottom : 60,
    borderRadius : 5,
  },
  success : {
    backgroundColor : "#00C851",
    borderColor : "#007E33",
    borderWidth : 2
  },
  warning : {
    backgroundColor : "#ffbb33",
    borderColor : "#FF8800",
    borderWidth : 2
  },
  error : {
    backgroundColor : "#ff4444",
    borderColor : "#CC0000",
    borderWidth : 2
  },
  icon : {
    flex : 1
  },
  text : {
    flex : 8
  },
  close : {
    flex : 1,
    justifyContent : "center"
  }
})

const mapStateToProps = (state) => ({
    alert: alertSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  closeAlertAction : ()=>{dispatch(closeAlertAction())}
})

export default connect(mapStateToProps,mapDispatchToProps)(Alert)