import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductDetailsModal = ({ product }) => {
    return (
        <div className="modal fade "  id={`productDetailsModal${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog " role="document">
                <div className="modal-content text-dark bg-light text-center shadow">
                    <div className="modal-header bg-dark text-center">
                        <h3 className="modal-title text-light shadow" id="exampleModalLabel">{product.name}</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Add product details here */}
                        <p>Name: {product.name}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                    <div className="modal-footer bg-dark">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;


// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const ProductDetailsModal = ({ product, handleClose }) => {
//     return (
//         <Modal show={!!product} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{product && product.name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 {product && (
//                     <>
//                         <p>Name: {product.name}</p>
//                         <p>Description: {product.description}</p>
//                         <p>Price: ${product.price}</p>
//                     </>
//                 )}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 {/* Add additional buttons or actions as needed */}
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default ProductDetailsModal;



// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../redux/action/CartAction';

// function ProductDetailsModal({ product }) {
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     handleClose();
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Details
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{product.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Name: {product.name}</p>
//           <p>Description: {product.description}</p>
//           <p>Price: ${product.price}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAddToCart}>
//             Add to Cart
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ProductDetailsModal;
 