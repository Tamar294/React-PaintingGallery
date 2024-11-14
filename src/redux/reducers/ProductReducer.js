import pic1 from '../../Pictures/pic1.jpeg';
import pic2 from '../../Pictures/pic2.jpeg';
import pic3 from '../../Pictures/pic3.jpeg';
import pic4 from '../../Pictures/pic4.jpeg';
import pic5 from '../../Pictures/pic5.jpeg';
import pic6 from '../../Pictures/pic6.jpeg';
import pic7 from '../../Pictures/pic7.jpeg';
import pic8 from '../../Pictures/pic8.jpeg';
import pic9 from '../../Pictures/pic9.jpeg';
import pic10 from '../../Pictures/pic10.jpeg';

const initialState =  [
        {id: 1, name: "Herd of sheep", qty: 5, cartQty:0, price: '15', description: 'Beautiful', image: pic10},
        {id: 2, name: "Banana plantation", qty: 5, cartQty:0, price: '180', description: 'Amazing', image: pic9},
        {id: 3, name: "Amazing view", qty: 5, cartQty:0, price: '120', description: 'Perfect', image: pic8},
        {id: 4, name: "Blue sea", qty: 5, cartQty:0, price: '850', description: 'Beautiful', image: pic7},
        {id: 5, name: "Concert", qty: 5, cartQty:0, price: '1999', description: 'Beautiful', image: pic6},
        {id: 6, name: "Cotton field", qty: 5, cartQty:0, price: '990', description: 'Beautiful', image: pic5},
        {id: 7, name: "Country house", qty: 5, cartQty:0, price: '1250', description: 'Beautiful', image: pic4},
        {id: 8, name: "Stunning view", qty: 5, cartQty:0, price: '800', description: 'Beautiful', image: pic3},
        {id: 9, name: "Sunset at sea", qty: 5, cartQty:0, price: '2000', description: 'Beautiful', image: pic2},
        {id: 10, name: "Rainy day", qty: 5, cartQty:0, price: '1000', description: 'Beautiful', image: pic1}

    ]
    

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DECREASEQTY":
          const newItem = [...state]
          console.log(action.product.qty)
          console.log(action.product.cartQty)
          state = state.filter(item=>item.id==action.product.id);
          if(state[0].qty >= 1){
            state[0].cartQty +=1
            state[0].qty -= 1
          }
          return newItem;

        case "INCREASEQTY":
          
          console.log(action.product.qty)
          console.log(action.product.cartQty)
            if(action.product.cartQty > 1){
            action.product.cartQty -= 1
            action.product.qty +=1
            }
          return state;
        default:
            return state;
    }
};




