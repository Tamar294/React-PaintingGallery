

export const decreaseQty = (product) => {
    return {
      type: "DECREASEQTY",
      product
      
    };
  };
  
  export const increaseQty = (product) => {
    return {
      type: "INCREASEQTY",
      product
    };
  };

