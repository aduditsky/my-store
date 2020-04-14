import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.sass';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
                ))  
                : 
            <span className='empty-message'>Корзина пуста</span>
            }
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
            В Корзину
        </CustomButton>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));