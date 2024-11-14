import { CartReducer } from "./redux/reducers/CartReduser";
import { ProductReducer } from "./redux/reducers/ProductReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
export default function GoToPayment(){
    useEffect(() => {
        alert("are you sure?????????")
    }, []);
     
     
    const products = useSelector((state) => state.CartReducer);
    var total =0;
    products.map((product) => (
        total += (product.cartQty * product.price),
        console.log(product.cartQty)
        
        ))

    return(
        <div className="container-fluid  bg-white" style={{ height: "600px" }}>
        <div className="container col-8">
        <h1 className="display-4 p-4 shadow ">Payment</h1>
        <table className="table table-dark table-hover">
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              console.log(item),
              console.log(item.cartQty),
              <tr key={index}>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.price}</td>
                <td>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{item.cartQty}</td>
                <td> {item.cartQty * item.price} </td>
                
              </tr>
              
            ))}
          </tbody>
        </table>
      
        <h1>Total : {total}</h1>
        <button className="btn btn-outline-dark">Pay now</button>
        </div>
        </div>
    );
}