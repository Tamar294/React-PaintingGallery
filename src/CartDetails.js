import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQty, increaseQty } from './redux/action/ProductAction';
import { deleteFromCart} from './redux/action/CartAction'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


export default function CartDetails() {

  const handleDeleteFromCart = (productId, index) => {
    dispatch(deleteFromCart(index, productId));
  };

  const products = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const[qty, setQty] = useState(0);

  const handleDecreaseQty = (index, qty) => {
    if (qty > 0) {
      dispatch(decreaseQty(index, qty));
    }
  };

  const handleIncreaseQty = (index, qty) => {
    dispatch(increaseQty(index, qty));
  };
  let flag = false;
  products.map((product) =>
  product.cartQty > 0? flag = true:flag = false
  )

  const dispatch1 = useDispatch();
  if(flag){
  return (

    <div className="container-fluid bg-light" style={{ height: "600px" }}>
      <div className="container col-8" text-center>
        <h1 className="display-4 p-4 shadow " >Shopping Cart</h1>
        <table className="table table-dark table-hover">
          <thead>
            <tr >
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.price}</td>
                
                
                <td>
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch1(decreaseQty(item));
                    setQty(item.cartQty);
                  }}>
                    +{/* <FontAwesomeIcon icon="fa-light fa-circle-minus" style={{color: "#0a0a0b",}}/> */}</button>

                  {item.cartQty}
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch1(increaseQty(item));
                    setQty(item.cartQty);
                  }}>
                   -{/*<FontAwesomeIcon icon="fa-light fa-circle-plus" style={{color: "#000000",}} /> */}</button>
                  </td>
                <td>
                  
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch1(deleteFromCart(item));
                  }}>
                    Delete<FontAwesomeIcon icon={faTrashCan} /></button>
                    
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/payment">
              <button className="btn btn-outline-dark">Go to payment</button>
        </Link>
      </div>
    </div>
  );}
  return(
    <center className="p">
    <h5>You have no items in your cart</h5></center>
  )
}
