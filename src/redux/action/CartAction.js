import product from "../reducers/ProductReducer"


export const addToCart = (product) => {
  return {
    type: "ADDTOCART",
    payload: product
  };
};

  export const deleteFromCart = (productId) => {
    return {
      type: 'DELETEFROMCART',
      productId,
    };
  };

export const decreaseQty = (productId) => ({
  type: 'DECREASEQTY',
  productId,
});

export const increaseQty = (productId) => ({
  type: 'INCREASEQTY',
  productId,
});