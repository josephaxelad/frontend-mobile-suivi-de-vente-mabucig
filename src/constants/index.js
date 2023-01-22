import { Dimensions } from 'react-native';

export const api = 'https://www.mabucig.com/api/';
export const prefUrlImage = 'https://www.mabucig.com/images/';

// export const api = 'http://192.168.1.79:3000/api/';
// export const prefUrlImage = 'http://localhost:3000/images/';

export const logo = 'assets/logo.png';
export const iconeStartLoader = 'assets/logo.png';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const wait = (duration) => { 
    return new Promise((resolve, reject) => { setTimeout(() => {
        resolve()
    }, duration); })
 }