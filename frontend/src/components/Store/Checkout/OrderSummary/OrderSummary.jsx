import React from 'react'
import './OrderSummary.scss';

export const OrderSummary = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const OrderCurrency = urlParams.get('c');
    const OrderPrice = urlParams.get('p');
    return (
        <>
            <div className='Main-OrderSummary'>
                <div className='OrderSummary Checkout__container'>
                    <div className='Title__container'>
                        <span>Order Summary</span>
                    </div>
                    <hr/>

                    <table>
                        <tbody>
                            <tr key="">
                                <td>Subtotal</td>
                                <td>{OrderCurrency}{OrderPrice}</td>
                            </tr>
                            <tr key="">
                                <td>Total</td>
                                <td>{OrderCurrency}{OrderPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <button>Place Order</button>
                </div>
            </div>
        </>
    )
}

