
const cart = []
export const CartReducer = (state = cart, action) => {
    switch (action.type) {
        case "ADDTOCART":
             let tempArr = state.filter((product) => product === action.payload);
             if (tempArr.length == 0) {
                return [...state, action.payload];
             }
             else {
                 {state.map((product) =>
                 product == action.payload ? { ...product, qty: product.qty += 1 } : product) } 
                 return state; 
             }

        case "DELETEFROMCART":
            console.log("reducer")
            state = state.filter(index => index.id != action.productId.id)
            return state;

        case "ADDQTY":
       
        default:
            return state;
    }
};

