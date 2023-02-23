import React from 'react';
import CartSvg from '../Icons/SvgIcons/CartSvg';

const Cart = () => {
    return (
        <div className="cart">
            <span className="icon icon--large">
                <CartSvg />
            </span>
        </div>
    );
};

export default Cart;
