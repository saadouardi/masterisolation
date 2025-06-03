import React from 'react'

export const ShippingAddress = () => {
    return (
            <>
                <div className='ShippingAddress Checkout__container'>
                    <div className='Title__container'>
                        <span>Shipping Address</span>
                        <span className='Required'>* Required</span>
                    </div>
                    <hr/>

                    <div className='Inputs__List'>
                        <div className='Input__container'>
                            <label>Full Name *</label>
                            <input type="text" />
                        </div>

                        <div className='Input__container'>
                            <label>Street Address *</label>
                            <input type="text" />
                        </div>

                        <div className='Input__container'>
                            <input type="email" />
                        </div>

                        <div className='Inputs__container'>
                            <div className='Input__container'>
                                <label>City *</label>
                                <input type="text" />
                            </div>

                            <div className='Input__container'>
                                <label>State/Province *</label>
                                <input type="text" />
                            </div>

                            <div className='Input__container'>
                                <label>Zip/Postal Code *</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='Input__container'>
                            <label>Street Address *</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </>
    )
}

