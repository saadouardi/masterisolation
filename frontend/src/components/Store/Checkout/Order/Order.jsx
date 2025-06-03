import React from 'react'
import './Order.scss';
export const Order = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const OrderName = urlParams.get('n');
    const OrderCurrency = urlParams.get('c');
    const OrderPrice = urlParams.get('p');
    const OrderQuantity = urlParams.get('q');
    const OrderImage = urlParams.get('src');

    return (
        <>
            <div className='Order Checkout__container'>
                <div>
                    <div className='Title__container'>
                        <span>Items in Order</span>
                    </div>
                    <hr/>

                    <div className='Order__details'>
                        <div className='Order__info'>
                            <img src={OrderImage} alt="" />
                            <div className='Order__name-qunatity'>
                                <span>{OrderName}</span>
                                <span>Quantity: {OrderQuantity}</span>
                            </div>
                        </div>

                        <div>
                            <span>{OrderCurrency}{OrderPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

