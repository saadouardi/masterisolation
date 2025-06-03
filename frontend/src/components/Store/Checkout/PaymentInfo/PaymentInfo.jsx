import React from 'react'
import './PaymentInfo.scss';

export const PaymentInfo = () => {
    return (
        <>
            <div className='PaymentInfo Checkout__container'>
                <div className='Title__container'>
                    <span>Payment Info</span>
                    <span className='Required'>* Required</span>
                </div>
                <hr/>

                <div className='Input__container'>
                    <label>Card Number *</label>
                    <input type="number" />
                </div>
                <div className='Input__container'>
                    <label>Name on Card *</label>
                    <input type="text" />
                </div>

                <div className='Inputs__container'>
                    <div className='Input__container'>
                        <label>Expiration Date *</label>
                        <input type="text" />
                    </div>

                    <div className='Input__container'>
                        <label>Security Code *</label>
                        <input type="number" />
                    </div>
                </div>

                <div className='Input__container Checkbox__container'>
                    <input type="checkbox" />
                    <label>Billing address same as shipping</label> 
                </div>
            </div>

        </>
    )
}

