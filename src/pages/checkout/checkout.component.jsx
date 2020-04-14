import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
 
import './checkout.styles.sass';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Товар</span>
            </div>
            <div className='header-block'>
                <span>Описание</span>
            </div>
            <div className='header-block'>
                <span>Количество</span>
            </div>
            <div className='header-block'>
                <span>Цена</span>
            </div>
            <div className='header-block'>
                <span>Убрать</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )    
            )
        }

        <div className='total'>
            <span>Всего: {total} руб.</span>
        </div>
        <div className='test-warning'>
            *Для теста оплаты использовать данные карты ниже*
            <br />
            4242 4242 4242 4242 – Exp: 01/21 CW: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);