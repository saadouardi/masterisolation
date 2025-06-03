import service1 from '../../assets/images/services/free-shipping.jpg';
import service2 from '../../assets/images/services/happy-sell.webp';
import service3 from '../../assets/images/services/online-order.jpg';
import service4 from '../../assets/images/services/promotion.webp';
import service5 from '../../assets/images/services/save-money.jpg';
import service6 from '../../assets/images/services/support.png';
import './Services.scss';

export const Services = () =>{
    return(
        <>
            <div className="services__list">
                <div className="service">
                    <img src={service1} alt=""/>
                    <button>CHECK NOW</button>
                </div>

                <div className="service">
                    <img src={service2} alt=""/>
                    <button>CHECK NOW</button>
                </div>

                <div className="service">
                    <img src={service3} alt=""/>
                    <button>CHECK NOW</button>
                </div>

                <div className="service">
                    <img src={service4} alt=""/>
                    <button>CHECK NOW</button>
                </div>

                <div className="service">
                    <img src={service5} alt=""/>
                    <button>CHECK NOW</button>
                </div>

                <div className="service">
                    <img src={service6} alt=""/>
                    <button>CHECK NOW</button>
                </div>
            </div>
        </>
    )
}