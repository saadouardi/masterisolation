import React from 'react';
import { Title } from '../../../components/Common/Title';
import service1 from '../../assets/images/services/free-shipping.jpg';
import service2 from '../../assets/images/services/happy-sell.webp';
import service3 from '../../assets/images/services/online-order.jpg';
import service4 from '../../assets/images/services/promotion.webp';
import service5 from '../../assets/images/services/save-money.jpg';
import service6 from '../../assets/images/services/support.png';
import './Services.scss';

export const Services = () => {
    const services = [
        { src: service1, alt: 'Free Shipping' },
        { src: service2, alt: 'Happy Sell' },
        { src: service3, alt: 'Online Order' },
        { src: service4, alt: 'Promotion' },
        { src: service5, alt: 'Save Money' },
        { src: service6, alt: 'Support' }
    ];

    return (
        <section>
            <Title title='OUR SERVICES'></Title>
            <div className="services__list">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <img src={service.src} alt={service.alt} />
                        <button>CHECK NOW</button>
                    </div>
                ))}
            </div>
        </section>
    )
}