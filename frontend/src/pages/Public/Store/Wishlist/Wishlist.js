import { useState ,useEffect } from 'react';
import { Header } from '../../../../components/Common/Header/Header';
import { Footer } from '../../../../components/Common/Footer/Footer';
import './Wishlist.scss';

export const WishlistPage = ()=>{
    const urlParams = new URLSearchParams(window.location.search);

    const productImg = urlParams.get('img');
    const productName = urlParams.get('name');
    const productRegularPrice = urlParams.get('regularprice');
    const productDiscountedPrice = urlParams.get('discountedprice');


    const [Wishlist,setWishlist] = useState(false);

    useEffect(() => {
        if (productImg) {
            setWishlist(true);
        }else{
            console.log('You have 0 item');
        }
    }, [productImg]);

    const handleRemove = () =>{
        window.location.href = '/wishlist';
    }

    return(
        <>
            <Header/>
            <main>
                <div class="cover-div about-cover">
                    <h1>#Wishlist</h1>
                    <h5>Know who are we , what we do and how we do</h5>
                </div>

                <div className='Wishlist-main__container'>
                    <div className='Wishlist__container'>
                        {!Wishlist &&
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 13.6169 21.6162 15.1442 20.9348 16.4958C20.8633 16.2175 20.7307 15.9523 20.5374 15.7206L20.4142 15.5858L19 14.1716L17.5858 15.5858L17.469 15.713C16.8069 16.4988 16.8458 17.6743 17.5858 18.4142C18.014 18.8424 18.588 19.0358 19.148 18.9946C17.3323 20.8487 14.8006 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15C10.6199 15 9.37036 15.5592 8.46564 16.4633L8.30009 16.6368L9.24506 17.4961C10.035 17.1825 10.982 17 12 17C12.9049 17 13.7537 17.1442 14.4859 17.3965L14.7549 17.4961L15.6999 16.6368C14.7853 15.6312 13.4664 15 12 15ZM8.5 10C7.67157 10 7 10.6716 7 11.5C7 12.3284 7.67157 13 8.5 13C9.32843 13 10 12.3284 10 11.5C10 10.6716 9.32843 10 8.5 10ZM15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10Z"></path></svg>
                                <h1>You haven't added anything to your wishlist yet.</h1>
                                <a href="/store">Master Isolation Store</a>
                            </>
                        }

                        {Wishlist &&
                            <div className='Wishlist'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={handleRemove}><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                <img src={productImg} alt="ItemImage" />
                                <h1>{productName}</h1>

                                <div className='prices'>
                                    <h1>{productDiscountedPrice}</h1>
                                    <h1><del>{productRegularPrice}</del></h1>
                                </div>

                                <button>ADD TO CART</button>
                            </div>
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};