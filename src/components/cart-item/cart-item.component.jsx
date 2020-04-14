import React from 'react';

import './cart-item.styles.sass';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={name} />
        <div className='time-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;