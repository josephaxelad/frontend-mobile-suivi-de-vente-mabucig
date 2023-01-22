import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, PermissionsAndroid } from 'react-native'
import { Button, Text } from 'galio-framework'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { wait, windowHeight, windowWidth } from '../../constants';
import HeaderScanner from './HeaderScanner';
import Modal from "react-native-modal";
import ProductScanned from './ProductScanned';
import { connect, useDispatch } from 'react-redux';
import { getProducts } from '../../services/products';
import { productsSelector } from '../../store/selectors/productsSelectors'
import { scanFailedAction, scanStartAction, updateScannedProductAction } from '../../store/actions/scannedProductActions';
import { PageSlider } from '@pietile-native-kit/page-slider';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { currencyFormat } from '../../helpers/currencyFormat';
import SearchProductHeader from './SearchProductHeader'
import Empty from '../_partials/Empty';
import { generateBoxShadowStyle } from './../../helpers/boxShadow'
import { semiWholesalerSelectedSelector } from '../../store/selectors/semiWholesalerSelectedSelectors';

function ProductScanner({ navigation, route, products, updateScannedProductAction, scanStartAction, scanFailedAction, semiWholesalerSelected }) {

  const dispatch = useDispatch()
  let scanner
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [CameraPermissionsAndroid, setCameraPermissionsAndroid] = useState(null);//denied,waiting,enabled

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getProducts())
      setFiltredProducts(products)
      scanner.reactivate()
    }
    return () => mounted = false;
  }, [semiWholesalerSelected])


  
  const openModal = () => {
    setModalVisible(true)
  };
  const closeModal = () => {
    setModalVisible(false)
    scanner.reactivate()
  };
  const onSuccess = async e => {
    scanStartAction()
    openModal()
    console.log(e)
    const productScanned = products.find(product => product._id == e.data)
    if (productScanned) {
      updateScannedProductAction(productScanned)
    } else {
      scanFailedAction("Ce Code Qr ne correspond à aucun produit")
    }


    // navigation.navigate('ProductScanned')
  };
  const search = (x) => {
    const filtred = products.filter((product) => {
      if (product.sku.toLowerCase().indexOf(x.toLowerCase()) != -1 || product.mark.name.toLowerCase().indexOf(x.toLowerCase()) != -1) {
        return true
      } else {
        return false
      }
    })
    setFiltredProducts(filtred)
  }
  const askCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "MAB FLOWS App Camera Permission",
          message:
            "MAB FLOWS a besoin d'accéder à votre caméra " +
            "pour vous permettre de scanner les cartons.",
          buttonNeutral: "Me demander plus tard",
          buttonNegative: "Retour",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermissionsAndroid(granted)
      } else {
        setCameraPermissionsAndroid(granted)
      }
    } catch (err) {
      console.warn(err);
    }

  }

  return (
    
    <View style={{ flex: 1, flexDirection: "column" }}>
      
      <Modal onSwipeComplete={() => { closeModal() }}
        swipeDirection={['down']} isVisible={isModalVisible} style={{ marginHorizontal: 0, marginBottom: 0, justifyContent: 'flex-end', }} >
        <View style={{ height: "95%", bottom: 0, }} >
          <ProductScanned closeModal={closeModal} setModalVisible={setModalVisible} />
        </View>
      </Modal>

      <View style={styles.headerScanner}><HeaderScanner semiWholesalerSelected={semiWholesalerSelected}></HeaderScanner></View>

      <PageSlider selectedPage={selectedPage} onSelectedPageChange={setSelectedPage} onCurrentPageChange={(currentPage) => { if (currentPage == 0) {
        scanner.enable()
      } else {
        scanner.disable()
      } }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          {CameraPermissionsAndroid === PermissionsAndroid.RESULTS.GRANTED || CameraPermissionsAndroid == null ? <Text style={styles.scanTitle}>Scanner un carton</Text> : null}

          <QRCodeScanner
            fadeIn={false}
            ref={(node) => { scanner = node }}
            reactivate={false}
            // reactivateTimeout = {3000}
            onRead={(e) => { onSuccess(e) }}
            flashMode={RNCamera.Constants.FlashMode.auto}
            // topContent={HeaderScanner()}
            // bottomContent={}
            topViewStyle={{ position: "absolute", top: 40, zIndex: 5, backgroundColor: "transparent" }}
            bottomViewStyle={{ backgroundColor: "blue", display: "none" }}
            containerStyle={{
              flex: 1,
              backgroundColor: "red"
            }}
            cameraContainerStyle={{
              flex: 1,
              backgroundColor: "white",
            }}
            cameraStyle={{
              // position : 'absolute',
              // flex : 1,
              // top : 0,
              // height : 700,
              height: windowHeight,
              // width : windowWidth ,
              overflow: 'hidden',
              // display : "none",
            }}
            showMarker={true}
            markerStyle={{ justifyContent: "center", borderRadius: 20, borderWidth: 4, borderColor: "#800000", backgroundColor: "rgba(220, 138, 128, 0.5)" }}
            cameraProps={{
              notAuthorizedView: (
                <View style={styles.ScanEmptyComponent} >
                  <Empty message={"L'activation de la caméra n'a pas été autorisée !"+(CameraPermissionsAndroid === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ? 'Activez-la dans les paramètres du téléphone': '')} />
                  {CameraPermissionsAndroid == PermissionsAndroid.RESULTS.DENIED || CameraPermissionsAndroid == null?
                    <View style={styles.row}>
                      <Button onPress={() => { askCameraPermission() }} style={[styles.ButtonToActiveCmera, generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717')]} round color="#800000">
                        <Text bold color='white' size={20}>Activer la caméra</Text>
                      </Button>
                    </View>
                    : null}

                </View>
              )
            }}
            notAuthorizedView={
              <View style={styles.ScanEmptyComponent} >
                <Empty message={"L'activation de la caméra n'a pas été autorisée !"} />
                <View style={styles.row}>
                  <Button onPress={() => { }} style={[styles.ButtonToSell, generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717')]} round color="#800000">
                    <Text bold color='white' size={20}>Activer la caméra</Text>
                  </Button>
                </View>
              </View>
            }
          // cameraProps = {
          //     {flex : 1,backgroundColor : "green"}
          // }
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "#f08080" }}>
          <FlatGrid
            itemDimension={130}
            data={filtredProducts}
            keyExtractor={item => item.sku}
            style={styles.gridView}
            ListHeaderComponent={<SearchProductHeader search={search} />}
            ListHeaderComponentStyle={styles.listHeaderStyle}
            stickyHeaderIndices={[0]}
            ListEmptyComponent={<Empty message="Aucun produit trouvé!" />}
            // staticDimension={300}
            // fixed
            // horizontal , { backgroundColor: item.code }
            spacing={10}
            renderItem={({ item }) => (
              <View style={[styles.itemContainer]}>
                <Image resizeMode="center" style={[styles.image]} source={require("../../assets/product_default.png")} />
                <Text style={styles.itemName}>{item.sku}</Text>
                <Text style={styles.itemCode}>{item.mark.name}</Text>
                <Text style={styles.itemCode}>{currencyFormat(item.price, ' ')}   FCFA</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}><Button onPress={() => { onSuccess({ data: item._id }) }} style={[{ flex: 1, flexDirection: 'row', backgroundColor: '#DCDCDC', marginHorizontal: 0 }]}><Text size={10} style={{ color: "black" }} >Ajouter </Text><Fontisto color='black' size={10} name='shopping-basket-add' /></Button></View>
              </View>
            )}
          />
        </View>
      </PageSlider>

    </View>
  )

}


const styles = StyleSheet.create({
  ButtonToActiveCmera: {
    flex: 1,
    padding: 10,
    marginBottom: 25
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // flex : 1
  },
  topContent: {
    //   flex: 1,
    height: 500,
    backgroundColor: "green",
  },
  bottomContent: {
    backgroundColor: "yellow",
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    //   padding: 16,
    //   backgroundColor : "black",
    //   flex : 1
  },
  headerScanner: {
    position: 'absolute',
    left: 0, right: 0, top: '7%',
    zIndex: 9000
  },

  gridView: {
    //marginTop: 10,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "#f08080",
    // height : windowHeight,
    // paddingTop: 110,
    marginTop: 110,
    // paddingBottom : 200
    zIndex: 0
  },
  itemContainer: {
    backgroundColor: '#800000',
    justifyContent: 'flex-end',

    borderRadius: 7,
    padding: 10,
    height: 180,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    // alignItems: 'flex-start',
    // alignContent : 'flex-start',
    // backgroundColor : 'black',
  },
  scanTitle: {
    position: 'absolute',
    left: 0, right: 0, top: '29%',
    zIndex: 9000,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'serif',
    color: 'white'
  },
  listHeaderStyle: {
    backgroundColor: "#f08080",
    paddingHorizontal: 15,
  },
  ScanEmptyComponent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "blue"
  },
});

const mapStateToProps = (state) => ({
  products: productsSelector(state),
  semiWholesalerSelected: semiWholesalerSelectedSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateScannedProductAction: (scannedProduct) => { dispatch(updateScannedProductAction(scannedProduct)) },
  scanStartAction: () => { dispatch(scanStartAction()) },
  scanFailedAction: (error) => { dispatch(scanFailedAction(error)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductScanner);