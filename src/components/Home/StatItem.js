import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon, Text } from 'galio-framework'
import LinearGradient from 'react-native-linear-gradient';
import { reduceLongNumbers } from '../../helpers/longNumber';

function StatItem({colors,name,qty,icon}) {
  return (
    <View style={styles.container}
        // colors={colors}
        // start={{ x: 0.2, y: 0.0 }}
        // end={{ x: 0.9, y: 0.4 }}
        // locations={[0, 0.4, 1]}
    >
        <View style={[styles.row]}>
            <View style={[styles.row]}>
                {icon}
                <Text size={20} bold color='#800000' style={{paddingLeft : 5}}>{name}</Text>
            </View>
            <View><Text size={18} bold color='#800000' style={{paddingLeft : 5}}>{reduceLongNumbers(qty)}</Text></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        flex : 1,
        // backgroundColor : "#800000",
        padding : 3,
        margin : 5,
        borderRadius : 10,
        borderColor : "#800000",
        borderWidth : 3
    },
    row : {
        flexDirection : 'row',
        alignItems : "center"
    }
})

export default StatItem