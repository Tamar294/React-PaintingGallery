import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQty, addQty } from './ProductAction';

const Dispatch = () => {
    const dispatch = useDispatch();

    const handleDecreaseQty = (productId, qty) => {
        dispatch(decreaseQty(productId, qty));
    };

    const handleAddQty = (productId, qty) => {
        dispatch(addQty(productId, qty));
    };

    // ... rest of your component code

    return (
        <>
            {/* ... your component JSX */}
        </>
    );
};

export default Dispatch;
