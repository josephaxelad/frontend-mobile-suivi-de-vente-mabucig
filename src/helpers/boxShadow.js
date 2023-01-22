import { Platform, StyleSheet } from 'react-native';

export const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
) => {
        if (Platform.OS === 'ios') {
        return StyleSheet.create({
            boxShadow :{
            shadowColor: shadowColorIos,
            shadowOffset: {width: xOffset, height: yOffset},
            shadowOpacity,
            shadowRadius,}
        }) 
        } else if (Platform.OS === 'android') {
        const styles = StyleSheet.create({
          boxShadow :{
            elevation,
            shadowColor: shadowColorAndroid,}
        }) 
        return styles.boxShadow
        }
}