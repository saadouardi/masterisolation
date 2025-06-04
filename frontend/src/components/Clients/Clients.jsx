import React from 'react';
import { Title } from '../../../components/Common/Title';
import client1 from '../../assets/images/clients/aiguebelle.jpg';
import client2 from '../../assets/images/clients/centrale.jpg';
import client3 from '../../assets/images/clients/cocacola.png';
import client4 from '../../assets/images/clients/pepsi.jpg';
import client5 from '../../assets/images/clients/sidi-ali.png';
import './Clients.scss';

export const Clients = () => {
    const clients = [
        { src: client1, alt: 'Aiguebelle' },
        { src: client2, alt: 'Centrale' },
        { src: client3, alt: 'Coca-Cola' },
        { src: client4, alt: 'Pepsi' },
        { src: client5, alt: 'Sidi Ali' }
    ];
    return(
        <section>
            <Title title='OUR CLIENTS'/>
            <div>
                <div className="client-list">
                    {clients.map((client, index) => (
                        <img 
                            key={index} 
                            src={client.src} 
                            alt={client.alt} 
                        /> 
                    ))}
                </div>
            </div>
        </section>
    )
} 