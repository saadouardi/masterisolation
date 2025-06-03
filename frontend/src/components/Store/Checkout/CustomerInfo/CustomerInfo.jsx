import React from 'react'
import './CustomerInfo.scss';

export const CustomerInfo = () => {
    return (
        <>
            <div className='CustomerInfo Checkout__container'>
                <div className='Title__container'>
                    <span>Customer Info</span>
                    <span className='Required'>* Required</span>
                </div>
                <hr/>
                <div className='Input__container'>
                    <label>Email *</label>
                    <input type="email" />
                </div>
            </div>
        </>
    );
};
