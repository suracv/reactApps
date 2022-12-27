//for add item to cart

export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//for delete item from cart
export const delCart = (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}

//for delete all items from cart
export const delAll = (product)=>{
    return{
        type:"DELALL",
        payload:product
    }
}

export const updateQuantity= (product)=> {
    return {
      type: "UPDATEQUANTITY",
      payload: product
    }
  }