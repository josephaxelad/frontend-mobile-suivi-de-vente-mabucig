import { Button, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

function modalConf({title,body,confirm,isModalVisible,setModalVisible}) {
// const [isModalVisible, setModalVisible] = useState(isModalVisible);
  const [isMounted, setIsMounted] = useState(null);

  useEffect(() => {
    if (isMounted == null) { setIsMounted(true);}
    setIsMounted(isModalVisible)

    return () => { 
        setIsMounted(false)
    };
  },[isModalVisible])

  const openModal = () => {
    // setIsMounted(true);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setIsMounted(false)
  };
  const confirmModal = () => { 
    closeModal()
    confirm()
  }

  return (
    // <View style={{height : 100}}>
    //   {/* <Button title="Show modal" onPress={toggleModal} /> */}

    isMounted == true ?
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.header}><Text size={25} bold>Confirmation</Text></View>
          <View style={styles.body}><Text size={20} color="black" bold>{body}</Text></View>
          <View style={styles.footer}>
              <Button style={styles.btnCloseModal} onPress={()=>{closeModal()}} ><Text color="#800000">Annuler</Text></Button>
              <Button style={styles.btnConfirmModal} onPress={()=>{confirmModal()}}>Confirmer</Button>
          </View>
        </View>
      </Modal>
      : null
    // </View>
  )
}

const styles = StyleSheet.create({
    container : {
      backgroundColor : "white",
      borderRadius : 15,
      // flex : 1
    },
    header : {
      paddingHorizontal : 10,
      flexDirection : "row",

    },
    body : {
      paddingHorizontal : 10,
      flexDirection : "row",
      borderBottomWidth : 1,
      borderTopWidth : 1,
      borderColor : "#ededed",
      paddingVertical : 15
    },
    footer : {
      flexDirection : "row",

    },
    btnConfirmModal : {
      flex : 1,
      backgroundColor : "#800000"
    },
    btnCloseModal : {
      flex : 1,
      backgroundColor : "white",
      borderColor : "#800000",
      borderWidth : 2,
      color : "#800000"
    }
})

export default modalConf