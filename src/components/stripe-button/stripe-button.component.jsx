import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_JlADn38LwNTXA1iZY1agTPuO00EOJBHs6l';

    const onToken = token => {
        console.log(token);
        alert('Оплачен!')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Nargore Store Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`К оплате $${price}`}
            amount={priceForStripe}
            pannelLabel='Оплатить сейчас'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;