import { Link } from "react-router-dom";

<div className="container__3">
<div className="icons__div">
    {/* <!-- WISHLIST ICON--> */}
    <Link to='/wishlist'>
        <div className="wishlist_icon__div icon__div">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi wishlist__icon" viewBox="0 0 16 16"><path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
            <span>WISHLIST</span>

            {/* <!-- NOTIFICATION DIV --> */}
            <div className="notification__div">
                <button className="notification__button">
                    <span className="notification__number" id="notification__number">5</span>
                </button>
            </div>
        </div>
    </Link>

    {/* <!-- CART ICON--> */}
    <div className="cart_icon__div icon__div">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi cart__icon" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
        <span>CART</span>

        {/* <!-- NOTIFICATION DIV --> */}
        <div className="notification__div">
            <button className="notification__button">
                <span className="notification__number" id="notification__number">5</span>
            </button>
        </div>
    </div>
</div>
</div>