import React from 'react';
import { Header } from '../../../../components/Common/Header/Header';
import { Footer } from '../../../../components/Common/Footer/Footer';
import { Checkout } from '../../../../components/Store/Checkout/Checkout';
export const CheckoutPage = () => {
    return (
        <main>
            <Header/>
            <Checkout/>
            <Footer/>
        </main>
    );
};


