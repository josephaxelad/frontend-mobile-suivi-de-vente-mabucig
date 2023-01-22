export const alertSelector = ({alertReducer : {alerts}}) => { 
    return alerts[alerts.length-1] 
 }