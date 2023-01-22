import { Button, Icon, Text,Input  } from 'galio-framework'
import React, { useState } from 'react'
import { View, StyleSheet, Image,ScrollView, ActivityIndicator, TextInput  } from 'react-native'
import { generateBoxShadowStyle } from '../../helpers/boxShadow'
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { scannedProductSelector } from '../../store/selectors/scannedProductSelectors'
import Empty from '../_partials/Empty';
import { addProductToCartAction } from '../../store/actions/cartActions';
import { currencyFormat } from '../../helpers/currencyFormat';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Slider from '@react-native-community/slider';

function ProductScanned({closeModal,setModalVisible,scannedProduct,addProductToCartAction}) {

    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(scannedProduct.value != null ? scannedProduct.value.price : 0);
    const [isCartridge, setIsCartridge] = useState(false)
    const [cartridge, setCartridge] = useState(1)

    const addProductToCart = (scannedProduct) => { 
        var _scannedProduct = {...scannedProduct,price : price}
        // scannedProduct.price = price
        if (price > 0 && qty > 0) {
            addProductToCartAction(_scannedProduct,qty)
            closeModal()
        }
        
     }

    const incrementQty = () => { 
        const newQty =   qty + 1
        setQty(newQty)
     }

    const decrementQty = () => { 
            const newQty =  qty - 1
            if (newQty>=0) {
                setQty(newQty)
            } else {
                setQty(0)
            }
            
     }
     const updateQty = (newQty) => { 
         console.log(newQty)
        if (newQty > 0 || newQty == "") {
            setQty(newQty)
        }
      }
    const addCartridge = (cartridgeQty) => { 
        const newQty = Math.floor(qty) + (cartridgeQty/scannedProduct.value.cartridge)
        setQty(newQty)
     }

  return (
        <LinearGradient style={styles.container}
        colors={['white',"#efc4c4", '#efc4c4', '#efc4c4','white']}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.2,0.5,0.7, 1]}
        >
            <View style={{width :"20%",borderTopColor : "black", borderWidth : 3,alignSelf : "center",borderRadius :50,marginVertical : 3}}></View>
             {scannedProduct.isLoading == true ?
             <View style={{flex : 1,justifyContent : "center",alignItems : "center"}}><ActivityIndicator size="small" color="#f08080"/></View> 
             : (scannedProduct.value != null ? 
            <ScrollView showsVerticalScrollIndicator={false}  >
            <View style={[styles.col]}><Image resizeMode="contain"   style={[styles.image]} source={require("../../assets/product_default.png")}/></View>
            <View style={[styles.col2,styles.block]}>
                <Text color='white' size={35} bold>{scannedProduct.value.sku}</Text>
                <Text color='#f08080' size={20} bold italic>{scannedProduct.value.mark.name}</Text>

                <View  style={[styles.row,{marginVertical : 2,padding : 0}]}><Icon name='info-with-circle' family='Entypo'></Icon><Text  style={{flex:1}} color='black' size={13}>Le prix unitaire affiché est le prix conseillé, vous pouvez le modifier</Text></View>
                
                <View   style={[styles.row,{width : "100%"}]}><Text color='white' size={15} muted bold>Prix Unitaire :</Text>
                <TextInput  
                onChangeText={(price) => setPrice(price == '' ? 0 :parseInt(price.replace(/ /g,'').trim()))}
                value={currencyFormat(price," ")}
                style={styles.textInput} 
                keyboardType='numeric' 
                // defaultValue={currencyFormat(scannedProduct.value.price," ")}
                ></TextInput>
                <Text  color='black' size={25} bold>FCFA</Text></View>
                <View  style={[styles.row]}><Text color='white' size={15} muted bold>Prix Total :</Text><Text color='black' size={25} bold> {currencyFormat((price*qty).toFixed(2)," ")} FCFA</Text></View>
            </View>
            <View style={[styles.row,styles.qtyZone,styles.block]}>
                <Button onPress={()=>{decrementQty()}} style={[styles.btn,styles.btnQty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} bold>-</Text></Button>
                <TextInput
                onChangeText={(qty)=>{
                    if (isCartridge) {
                        setIsCartridge(false)
                        setCartridge(0)
                    }
                    // updateQty(qty == '' ? '' : Math.floor(+qty) )
                    updateQty(+qty)
                }}
                value={Math.floor(+qty).toString()}
                style={[styles.textInput1]} 
                keyboardType='number-pad' 
                ></TextInput>
                {/* <Button  disabled style={[styles.btn,styles.qty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} >{qty}</Text></Button> */}
                <Button onPress={()=>{incrementQty()}} style={[styles.btn,styles.btnQty,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text color='white' size={20} bold>+</Text></Button>
            </View>
            <View style={[styles.col2,styles.block]}>
                <View><BouncyCheckbox
                    isChecked = {isCartridge} 
                    disableBuiltInState
                    size={20}
                    fillColor="#800000"
                    unfillColor="#FFFFFF"
                    text={"Cartouches"+( isCartridge ? '('+cartridge+'/'+((scannedProduct.value.cartridge)-1)+')' : '')}
                    iconStyle={{ borderColor: "#800000" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{color : 'black', fontFamily: "JosefinSans-Regular" ,textDecorationLine: "none",}}
                    onPress={() => {
                        if (isCartridge) {
                            addCartridge(0)
                        }
                        setIsCartridge(!isCartridge)
                        
                    }}
                    />
                </View>
                <View>
                {isCartridge ? 
                <Slider
                style={{width: '100%', height: 30}}
                step={1}
                minimumValue={1}
                maximumValue={scannedProduct.value.cartridge-1}
                minimumTrackTintColor="#800000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#800000"
                onValueChange={(value) => {
                    setCartridge(value)
                    addCartridge(value)
                }}
                />
                :
                null}
                
                </View>
            </View>
            <View style={[styles.row,styles.block]}>
                <Button onPress={()=>{closeModal()}} style={[styles.btn1_1,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text size={20} color='white'>Annuler </Text><MaterialCommunityIcons color={'white'} size={25} name='cancel'/></Button>
                <Button onPress={()=>{addProductToCart(scannedProduct.value)}} style={[styles.btn1_2,generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 6, '#171717')]}><Text size={20} color='white'>Ajouter </Text><Fontisto color='white' size={25} name='shopping-basket-add'/></Button>
            </View>
            {/* <View style={{marginBottom : 500}} ></View> */} 
            {/* <View><Button style={styles.btn}></Button></View> */}
            </ScrollView>
            : <Empty message={scannedProduct.error}/>)
            }
        </LinearGradient>
  )

}

const styles = StyleSheet.create({
    container : {
        flexDirection : "column",
        flex : 1,
        // marginTop : "50%",
        // alignItems : 'flex-end',
        justifyContent : "flex-end",
        padding : 10,
        paddingHorizontal : 20,
        backgroundColor : "white",
        borderTopStartRadius : 30,
        borderTopEndRadius : 30,
        overflow : "hidden"
    },
    image : {
        // flex : 1,
        height : 170
    },
    row : {
        flexDirection : "row",
        alignItems : "center",
    },
    block : {
        marginVertical : 10
    },
    col2 : {
        flexDirection : "column",
        justifyContent : "flex-start"
    },
    col : {
        justifyContent : "center",
        alignItems : "center"
    },
    btn : {
        backgroundColor :"#DCDCDC"
    },
    btn1_1 : {
        flexDirection : "row",
        flex : 1,
        backgroundColor :"#800000",
        margin : 0,
        marginRight : 5,
        padding : 5
    },
    btn1_2 : {
        flexDirection : "row",
        flex : 1,
        backgroundColor :"#800000",
        margin : 0,
        marginLeft : 5,
        padding : 5
    },
    btn2 : {
        backgroundColor :"#DCDCDC"
    },
    btnQty : {
        flex : 1,
        margin : 0,
    },
    qty : {
        flex : 1,
        flexDirection : "row",
        justifyContent : 'center',
        margin : 0,
        borderRadius : 0,
        backgroundColor :"#DCDCDC"
    },
    qtyZone : {
        // flex : 6,
    },
    btnClose : {
        flex : 1,
        backgroundColor : "white",
        borderColor : "#800000",
        borderWidth : 2,
        color : "#800000",

        flexDirection : "row",
        margin : 0,
        marginRight : 5,
        padding : 5
      },
    textInput : {
        fontSize : 25,
        fontWeight : "bold",
        borderBottomWidth : 3,
        backgroundColor : "white",
        paddingVertical : 2,
        paddingHorizontal : 7,
        color: 'black'
    },
    textInput1 : {
        flex : 1,
        textAlign : "center",
        flexDirection : "row",
        justifyContent : 'center',
        fontSize : 25,
        fontWeight : "bold",
        // borderBottomWidth : 3,
        backgroundColor : "white",
        paddingVertical : 2,
        paddingHorizontal : 7,
        color: 'black'
    }
  })

const mapStateToProps = (state) => ({
    scannedProduct : scannedProductSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    addProductToCartAction : (product,qty) => {dispatch(addProductToCartAction(product,qty))}
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductScanned)