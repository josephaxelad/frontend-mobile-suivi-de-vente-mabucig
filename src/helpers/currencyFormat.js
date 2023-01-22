export const currencyFormat = (num,div)=>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, div);
  }