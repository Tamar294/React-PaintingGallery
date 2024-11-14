import { useSelector } from 'react-redux';
import store from './redux/store';
import Shop from './Shop';
import './App.css';
import CartDetails from './CartDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cartReducer } from './redux/reducers/CartReduser';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import GoToPayment from './GoToPayment'
import { Link } from 'react-router-dom';
import About from './About';
import Nav from './Nav'

function App() {
  const cart = useSelector((state) => state.cartReducer);
  
  return (
    <div >
      <BrowserRouter>
      <Nav></Nav>
     
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/payment" element={<GoToPayment />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
   </BrowserRouter>
     
      {/* </header> */}
    </div>
  );
}

export default App;
