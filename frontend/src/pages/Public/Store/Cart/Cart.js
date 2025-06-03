export const CartPage = () =>{
    return(
        <>
            <div className='Main-Cart' id='Main-Cart'>
                <div className="Cart" id='Cart'>
                    <div className="">
                        <div className="Close-Cart__container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="close Close-Cart__btn" id="Close-Cart__btn"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                        </div>

                        <div className='Title__container'>
                            <h1>My Cart</h1>
                        </div>
                        <hr/>
                    </div>


                    <div className="Products-Cart__list">
                        <h1>No products in the cart.</h1>
                    </div>

                    <div>
                        <div className="Sub-Total__container">
                            <h1>Sub Total:</h1>
                            <div className="SubTotal-Price__container">
                                <span className="Store-Currency">--</span>
                                <span className="TotalPrice Product-TotalPrice Product-Price">--</span>
                            </div>
                            
                        </div>
                        <hr/>

                        <div className="Cart-Button__Container">
                            <button>VIEW CART</button>
                            <button>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}