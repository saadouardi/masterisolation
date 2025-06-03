import { useState , useEffect } from 'react';
import { QuickView } from '../QuickView/QuickView';
import { Cart } from '../Cart/Cart';
import './Product.scss';

export const Product = ({ProductImage, ProductName, ProductCurrency, ProductRegularPrice, ProductDiscounterPrice}) => {
    const [showQuickView, setShowQuickView] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [SkeletonLoading,setSkeletonLoading] = useState(true);
    const handleProductDetails = (ProductName) => {
        window.location.href = `/product?n=${ProductName}&c=${ProductCurrency}&rp=${ProductRegularPrice}&dp=${ProductDiscounterPrice}&src=${ProductImage}`;
    }
    const handleWishlist = () =>{
        document.location.href = `/wishlist?img=${ProductImage}&name=${ProductName}&regularprice=${ProductCurrency+ProductRegularPrice}&discountedprice=${ProductCurrency+ProductDiscounterPrice}`;
    }
    const handleQuickView = (e) => {
        setShowQuickView((prevShowQuickView) => !prevShowQuickView);
    };
    const handleCartVisibility = () => {
        setShowCart((prevShowCart => !prevShowCart));
    }    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSkeletonLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
    })
    if(SkeletonLoading){
        return(
            <div className="LazyLoading" id='Product'></div>
        );
    };
    return(
        <>  
            {showCart && 
                <Cart ProductImage={ProductImage} ProductName={ProductName} ProductCurrency='$' ProductDiscounterPrice={ProductDiscounterPrice} Display="true"/>
            }
            {showQuickView && 
                <QuickView ProductImage={ProductImage} ProductName={ProductName} ProductPrice={ProductDiscounterPrice} />
            }
            <div className="Product" id='Product'>
                <div className="Product-Image__container" onClick={()=>{handleProductDetails(ProductName)}}>
                    <img src={ProductImage} alt="ProductImage" className="Product-Image" />
                </div>
                <div className="Product-Info__container">
                    <div className="Product-Name__container">
                        <h1 className="Product-Name">{ProductName}</h1>
                    </div>
                    <div className="Product-Price__container">
                        <div className="Discounted-Pirce__container">
                            <h1 className="Store-Currency">{ProductCurrency}<span className="Discounted-Pirce Product-Price">{ProductDiscounterPrice}</span></h1>
                        </div>
                        <div className="Regular-Price__container">
                            <del>    
                                <h1 className="Store-Currency">{ProductCurrency}
                                    <span className="Regular-Price Product-Price">{ProductRegularPrice}</span>
                                </h1>
                            </del>
                        </div>
                    </div>
                    <div className='Main-Icon__container'>
                        <div className="Icon__container">
                            <button className="Icon-bgColor" onClick={handleQuickView}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                            </button>
                            <button className="Icon-bgColor" onClick={handleCartVisibility}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id='AddToCart'><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                            </button>
                            <button className="Icon-bgColor" onClick={handleWishlist}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};