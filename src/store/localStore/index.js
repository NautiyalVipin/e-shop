export const _products ="_products" //Key for storing updated state of the products list
export const _cart ="_cart"  //Key for dtoring updated state of the cart list



// Get parsed data from a provided key from the localstorage 
export const dataGetter = (key) => {
    let arr = JSON.parse(localStorage.getItem(key));
    return arr
};

// Set provided object or value to the provided key in the localstorage
export const dataSetter = (key,obj)=>{
    localStorage.setItem(key,JSON.stringify(obj))
  
}
