import React from 'react';
import CartSvg from '@components/IconComponent/SvgIcons/CartSvg';

const Cart = () => {
    return (
        <div className="cart">
            <span className="icon">
                <CartSvg />
            </span>
        </div>
    );
};

export default Cart;
