import { useState } from 'react';
import './Cart.scss';

export const Cart = ({ProductImage,ProductName,ProductCurrency,ProductDiscounterPrice,Display})=>{
    
    const [Cart,SetCart] = useState(true);
    const handleCart = () =>{
        SetCart(false);
    }

    // QUANTITY //
    let [Quantity,SetQunatity] = useState(1);
    const handleAddQuantity = () =>{
        if(Quantity===5){
            return;
        }
        SetQunatity(Quantity+1);
    }
    const handleSubQuantity = () =>{
        if(Quantity===1){
            return;
        }
        SetQunatity(Quantity-1);
    }
    const handleQuantity = ()=>{
        if(Quantity===1){
            SetQunatity(Quantity++)
        }else{
            SetQunatity(Quantity--)
        }
    }
    // No item //
    const [NoItem,setNoItem] = useState(false);
    const handleNoItem = () =>{
        setNoItem(!NoItem);
    }
    // CHECKOUT //
    const handleCheckout = () =>{
        window.location.href = `/checkout?n=${ProductName}&p=${ProductDiscounterPrice}&c=${ProductCurrency}&q=1&src=${ProductImage}`;
    }

    return(
        <>
            {Cart &&
            <div className='MainCart' id='Main-Cart'>
                <div className="Cart" id='Cart'>
                    <div className="Cart-Title">
                        <div className="Close-Cart__container">
                            <svg className="close Close-Cart__btn" id="Close-Cart__btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={handleCart}><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                        </div>

                        <div className='Title__container'>
                            <h1>My Cart</h1>
                        </div>
                        <hr/>
                    </div>
                    { (!NoItem && !Display) &&
                        <div className='NoItem__container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 13.6169 21.6162 15.1442 20.9348 16.4958C20.8633 16.2175 20.7307 15.9523 20.5374 15.7206L20.4142 15.5858L19 14.1716L17.5858 15.5858L17.469 15.713C16.8069 16.4988 16.8458 17.6743 17.5858 18.4142C18.014 18.8424 18.588 19.0358 19.148 18.9946C17.3323 20.8487 14.8006 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15C10.6199 15 9.37036 15.5592 8.46564 16.4633L8.30009 16.6368L9.24506 17.4961C10.035 17.1825 10.982 17 12 17C12.9049 17 13.7537 17.1442 14.4859 17.3965L14.7549 17.4961L15.6999 16.6368C14.7853 15.6312 13.4664 15 12 15ZM8.5 10C7.67157 10 7 10.6716 7 11.5C7 12.3284 7.67157 13 8.5 13C9.32843 13 10 12.3284 10 11.5C10 10.6716 9.32843 10 8.5 10ZM15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10Z"></path></svg>
                            <h1>You haven't added anything to your wishlist yet.</h1>
                            <a href="/store">Master Isolation Store</a>
                        </div>
                    }
                    
                    { Display &&
                    <div className="Products-Cart__list">
                        <div className="Product-Cart">
                            <div className='Product-image-name__container'>
                                <div>
                                    <img src={ProductImage} alt="" />    
                                </div>

                                <div>
                                    <h1>{ProductName}</h1>

                                    <div>
                                        <span className='Input-Value'>${Quantity}</span><span className='ValueX'>x    </span>
                                        <span className="Store-Currency">{ProductCurrency}</span>
                                        <span className="Discounted-Pirce Product-Price">{ProductDiscounterPrice}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='Value-Info__container'>
                                <div className='Product-Value__container'>
                                    <button className='MinusBtn' id='MinusBtn' onClick={handleSubQuantity}>-</button>
                                    <input type="text" defaultValue={1} value={Quantity} readOnly />
                                    <button className='PlusBtn' id='PlusBtn' onClick={handleAddQuantity}>+</button>
                                </div>

                                <div className='Delete__container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                </div>
                            </div>
                            <hr/>
                        </div>

                        {/* SUB TOTAL */}
                        <div>
                            <div className="Sub-Total__container">
                                <h1>Sub Total:</h1>
                                <div className="SubTotal-Price__container">
                                    <h1 className="Store-Currency">{ProductCurrency}{ProductDiscounterPrice * Quantity}</h1>
                                </div>
                                
                            </div>
                            <hr/>

                            <div className="Cart-Button__Container">
                                <button>VIEW CART</button>
                                <button onClick={handleCheckout}>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                
            </div>
            }
        </>
    );
};