import { Link } from "react-router-dom";
import logo from './Pictures/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import logo from './Pictures/logo.jpg';
import { useSelector} from 'react-redux';
import { ProductReducer } from './redux/reducers/ProductReducer';
import React, { useState } from 'react';

// export default function Nav() {
// const products = useSelector((state) => state.ProductReducer);
// var allQty = 0;
// {products.map((product) =>
//     allQty += product.cartQty)}
//     return (
// <>
//     <div class="text-center">
//         <img class="rounded float-center " src={logo} />
//     </div>
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{alignItems: 'center'}}>
    <ul class="navbar-nav mr-auto text-center justify-content-between">
           
        <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
            <li class="nav-item active" role="presentation">
                <a class="nav-link">
                    <Link to="/">Shop</Link>
                </a>
            </li>
            <li class="nav-item active" role="presentation">
            <div className="cart-icon">
                <a class="nav-link">
                    <Link to="/cart"><FontAwesomeIcon icon={faCartPlus}/>{allQty > 0 && <span className="item-count">{allQty}</span>}</Link>
                </a>
                        

                        </div>
                
            </li>
            <li class="nav-item active" role="presentation">
                <a class="nav-link">
                    <Link to="/about">about</Link>
                </a>
            </li>
        </div>
    </ul>

</nav> */}


export default function Nav() {
    const products = useSelector((state) => state.ProductReducer);
    var allQty = 0;
    {products.map((product) =>
    allQty += product.cartQty)}
    return (
        <>
            <center>
                <img src={logo} style={{ "width": "15rem" }} />
            </center>
            <center>
                <ul class="nav justify-content-center">
                    {/* <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><Link to="/" style={{ "color": "black", "marginRight": "5rem" }}>Home</Link></a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href="#"><Link to="/" style={{ "color": "black", "marginRight": "5rem" }}>Shop</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><Link to="/about" style={{ "color": "black", "marginRight": "5rem" }}>About</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><Link to="/cart" style={{ "color": "black", "marginRight": "5rem" }}><FontAwesomeIcon icon={faCartPlus}/>{allQty > 0 && <span className="item-count">{allQty}</span>}</Link></a>
                    </li>
                </ul>
            </center>
        </>
    )
}

