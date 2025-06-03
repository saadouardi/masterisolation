import React from 'react';
import { CustomerInfo } from './CustomerInfo/CustomerInfo';
import { ShippingAddress } from './ShippingAddress/ShippingAddress';
import { ShippingMethod } from './ShippingMethod/ShippingMethod';
import { PaymentInfo } from './PaymentInfo/PaymentInfo';
import { Order } from './Order/Order';
import { OrderSummary } from './OrderSummary/OrderSummary';
import './Checkout.scss';


export const Checkout = () => {
    return (
        <>
            <div className='Checkout'>
                <h1>Checkout</h1>

                <div className='Main-Checkout'>
                    <div className='Checkout__list'>
                        <CustomerInfo/>
                        <ShippingAddress/>
                        <ShippingMethod/>
                        <PaymentInfo/>
                    </div>

                    <div className='Checkout__list'>
                        <Order/>
                        <OrderSummary/>
                    </div>
                </div>
            </div>
        </>
    )
}

