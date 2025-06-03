import client1 from '../../assets/images/clients/aiguebelle.jpg';
import client2 from '../../assets/images/clients/centrale.jpg';
import client3 from '../../assets/images/clients/cocacola.png';
import client4 from '../../assets/images/clients/pepsi.jpg';
import client5 from '../../assets/images/clients/sidi-ali.png';
import './Clients.scss';

export const Clients = () =>{
    return(
        <>
            <div className='Clients'>
                <div className="clients__list">
                    <img src={client1} alt=""/>
                    <img src={client2} alt=""/>
                    <img src={client3} alt=""/>
                    <img src={client4} alt=""/>
                    <img src={client5} alt=""/>
                </div>
            </div>
        </>
    )
} 