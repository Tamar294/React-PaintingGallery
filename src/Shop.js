import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from './redux/action/CartAction';
import {decreaseQty, increaseQty} from './redux/action/ProductAction'
import ProductDetailsModal from './Modals/ProductDetailsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default function Shop() {
    const products = useSelector((state) => state.ProductReducer);
    const cart = useSelector((state) => state.CartReducer);
    const dispatch = useDispatch();
    const[qty, setQty] = useState(0);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    

    // export  () =>{
    //     const allQty = 0;
    //     return {cart.map((product) =>
    //         allQty += product.qty )}
    // }
    var allQty = 0;
    {products.map((product) =>
        allQty += product.cartQty)}
    return (
        <>

        <div className='container-fluid .bg-light justify-content-between"'>
            {/* <h1 className='display 6 text-dark mb-4 p-4' text-center>Products:</h1> */}
            <div className='container d-flex ' style={{alignItems: 'center', flexDirection:"column-reverse"}}>
            {products && products.map((product) => (
                <div key={product.id} className="card col-6 bg-dark text-light mb-2 p-4 ">
                    <h2>{product.name}</h2>
                    
                    <img src={product.image} alt={product.name} />
                    <p>Price: ${product.price}</p>
                    
                    <div className=' d-flex ' style={{alignItems: 'center', flexDirection:"column-reverse", alignContent:'center'}}>
                    
                    
                    {/* <button className="btn btn-outline-light mb-3 w-50 p-3 " onClick={() => handleAddToCart(product)}>Add to Cart   <FontAwesomeIcon icon={faCartPlus} /> </button> */}
                    <button className="btn btn-outline-light mb-3 w-50 p-3 " onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(product));
                    dispatch(decreaseQty(product));
                    // dispatch(increaseQty(product));
                    // setQty(product.cartQty);
                  }}>
                    Add to Cart<FontAwesomeIcon icon={faCartPlus} /></button>
                    <button
                        type="button"
                        className="btn btn-outline-light mb-3 w-50 p-3 "
                        data-toggle="modal"
                        data-target={`#productDetailsModal${product.id}`}
                    >
                           Details <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                  
                    </div>
                    <ProductDetailsModal product={product} />
                </div>
            ))}
            {/* <div >
            <Link to="/cart">
                    <button className="btn btn-outline-dark">Go to Cart</button>
                </Link>
            <div className="cart-icon">
                        <FontAwesomeIcon icon={faCartPlus} />

                        {allQty > 0 && <span className="item-count">{allQty}</span>}
            </div>
            </div> */}
            </div>
            </div>
            
        </>
    );
    // return allQty;
}


// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from './redux/action/CartAction';
// import ProductDetailsModal from './Modals/ProductDetailsModal';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// export default function Shop() {
//     const products = useSelector((state) => state.productReducer.products);
//     const dispatch = useDispatch();

//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//     };

//     const handleShowDetails = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleCloseDetails = () => {
//         setSelectedProduct(null);
//     };

//     return (
//         <>
//             {products && products.map((product) => (
//                 <Card key={product.id} style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={product.image} alt={product.name} />
//                     <Card.Body>
//                         <Card.Title>{product.name}</Card.Title>
//                         <Card.Text>
//                             <p>Price: ${product.price}</p>
//                             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                             <Button variant="primary" onClick={() => handleShowDetails(product)}>
//                                 Details
//                             </Button>
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             ))}

//             {selectedProduct && (
//                 <ProductDetailsModal
//                     product={selectedProduct}
//                     handleClose={handleCloseDetails}
//                 />
//             )}
//         </>
//     );
// }

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from './redux/action/CartAction';
// import ProductDetailsModal from './Modals/ProductDetailsModal';

// export default function Shop() {
//     const products = useSelector((state) => state.productReducer.products);
//     const dispatch = useDispatch();

//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//     };

//     const handleShowDetails = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleCloseDetails = () => {
//         setSelectedProduct(null);
//     };

//     return (
//         <>
//             <h1>Products:</h1>

//             {products && products.map((product) => (
                
//                 <div key={product.id} className="card">
//                     <h2>{product.name}</h2>
//                     <img src={product.image} alt={product.name} />
//                     <p>Price: ${product.price}</p>
//                     <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                         onClick={() => handleShowDetails(product)}
//                     >
//                         Details
//                     </button>
//                 </div>
//             ))}

//             {selectedProduct && (
//                 <ProductDetailsModal
//                     product={selectedProduct}
//                     handleClose={handleCloseDetails}
//                 />
//             )}  
//         </>
//     );
// }


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from './redux/action/CartAction';
// import ProductDetailsModal from './Modals/ProductDetailsModal';

// export default function Shop() {
//     const products = useSelector((state) => state.productReducer.products);
//     const dispatch = useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//     };

//     return (
//         <>
//             <h1>hiiiii!!!!!</h1>
//             {products && products.map((product) => (
//                 <div key={product.id} className="card">
//                     <h2>{product.name}</h2>
//                     <img src={product.image} alt={product.name} />
//                     <p>Price: ${product.price}</p>
//                     <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                         data-toggle="modal"
//                         data-target={`#productDetailsModal${product.id}`}
//                     >
//                         Details
//                     </button>
//                     <ProductDetailsModal product={product} />
//                 </div>
//             ))}
//         </>
//     );
// }


//     // return (
//     //     <>
//     //         <h1>hiiiii!!!!!</h1>
//     //          {products.map((item) => (

//     //             <h2>nnnnnnn</h2>,
//     //             <h2>{item.name} {item.qty} index </h2>
//     //         ))} 
//     //         {/* <h1>{products[0].name}</h1> */}
//     //     </>
//     // )
// // }




