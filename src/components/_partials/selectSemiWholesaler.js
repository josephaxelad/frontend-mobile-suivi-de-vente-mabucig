import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Text, Icon } from 'galio-framework'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'
import { connect, useDispatch } from 'react-redux';
import { getSemiWholesalers } from '../../services/semiWholesalers';
import { semiWholesalersSelector } from '../../store/selectors/semiWholesalersSelectors';
import { semiWholesalerSelectedSelector } from '../../store/selectors/semiWholesalerSelectedSelectors';
import { updateSemiWholesalerSelectedAction } from '../../store/actions/semiWholesalerSelectedActions';



function selectSemiWholesaler({ bgColor, semiWholesalers, semiWholesalerSelected, updateSemiWholesalerSelectedAction }) {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(semiWholesalerSelected)
        let mounted = true;
        if (mounted) {
            dispatch(getSemiWholesalers())
        }
        return () => mounted = false;
    }, [])

    const bgColor_ = bgColor
    return (
        <SelectDropdown
            defaultButtonText="Choisir un client "
            defaultValue={semiWholesalerSelected}
            data={semiWholesalers}
            onSelect={(selectedItem, index) => {
                updateSemiWholesalerSelectedAction(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.name
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
            buttonStyle={[styles.select, { backgroundColor: bgColor_ }]}
            buttonTextStyle={styles.selectTxtStyle}
            dropdownStyle={styles.dropdown}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            rowStyle={{ height: 60, paddingHorizontal: 10 }}
            rowTextStyle={{}}
            renderCustomizedRowChild={(item, index) => {
                return (
                    <View style={{}}>
                        {/* <Image source={item.image} style={styles.dropdownRowImage} /> */}
                        <Text numberOfLines={2} style={styles.rowTextStyle} color="black"  >
                            <Text style={styles.rowIdTextStyle} muted italic >{item.idAccount} </Text>
                            {item.name}
                        </Text>
                        {/*  */}
                    </View>
                );
            }}
        />
    )
}
const styles = StyleSheet.create({
    selectContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",


    },
    select: {
        flex: 1,
        borderRadius: 10,
        // backgroundColor : "#DCDCDC",
    },
    selectTxtStyle: {
        fontWeight: "bold",
        // color : "white"
    },
    dropdown: {
        // backgroundColor : "#DCDCDC",
        borderRadius: 10,
        backgroundColor: "white"
        // width : windowWidth,       
    },
    rowTextStyle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    rowIdTextStyle: {
        fontSize: 15,
        fontWeight: "bold",
        // color :"#f08080"
    }
})

const mapStateToProps = (state) => ({
    semiWholesalers: semiWholesalersSelector(state),
    semiWholesalerSelected: semiWholesalerSelectedSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    updateSemiWholesalerSelectedAction: (semiWholesalerSelected) => { dispatch(updateSemiWholesalerSelectedAction(semiWholesalerSelected)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(selectSemiWholesaler)