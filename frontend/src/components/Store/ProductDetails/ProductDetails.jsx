import { useState } from "react";
import { ReadMore } from "../../ReadMore/ReadMore";
import Visa from "../../../assets/images/shop/payment/Visa.webp";
import MasterCard from "../../../assets/images/shop/payment/MasterCard.png";
import PayPal from "../../../assets/images/shop/payment/PayPal.webp";
import "./ProductDetails.scss";

export const ProductDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("n");
  const productCurrency = urlParams.get("c");
  const productRegularPrice = urlParams.get("rp");
  const productDiscountedPrice = urlParams.get("dp");
  const productImg = urlParams.get("src");

  const [GenInfo, SetGenInfo] = useState(true);
  const [ProductDetails, SetProductDetails] = useState(false);
  const [Reviews, SetReviews] = useState(false);

  const handlePrice = () => {
    let Quantity = document.getElementById("quantity").value;
    document.getElementById("qunatity-price").textContent = `${Quantity}x`;
    document.getElementById("discountedPrice").textContent =
      productDiscountedPrice * Quantity;
    document.getElementById("regularPrice").textContent =
      productRegularPrice * Quantity;
  };
  const handleGeneralInfo = () => {
    SetGenInfo(true);
    SetProductDetails(false);
    SetReviews(false);
  };
  const handleProductDetails = () => {
    SetProductDetails(true);
    SetGenInfo(false);
    SetReviews(false);
  };
  const handleReviews = () => {
    SetReviews(true);
    SetGenInfo(false);
    SetProductDetails(false);
  };
  return (
    <>
      <div className="ProductDetails">
        <div className="Product-Name-Options__container">
          <div className="Product-Name__container">
            <h1>{productName}</h1>
          </div>
          <div className="Product-Options__container">
            <button onClick={handleGeneralInfo} className="active">
              General info
            </button>
            <button onClick={handleProductDetails}>Product details</button>
            <button onClick={handleReviews}>
              Reviews<sup>12</sup>
            </button>
          </div>
          <hr />
        </div>
        <div className="Main-Product_display-info__container">
          <div className="Product-Images left-side">
            <div className="Main-Product-Image__container">
              <img src={productImg} alt="" />
            </div>
            <div className="Secondary-Product-Image__conianer">
              <img src={productImg} alt="" />
              <img src={productImg} alt="" />
              <img src={productImg} alt="" />
              <img src={productImg} alt="" />
              <img src={productImg} alt="" />
            </div>
          </div>
          <div className="Product-Info right-side">
            {GenInfo && (
              <div className="GenInfo">
                <div className="space-between__container">
                  <div className="Product-Price__container">
                    <span className="Product__Discounted-Price">
                      <span className="Quantity" id="qunatity-price">
                        1x
                      </span>
                      <span>{productDiscountedPrice} = </span>
                      <span>{productCurrency}</span>
                      <span id="discountedPrice">{productDiscountedPrice}</span>
                    </span>
                    <span className="Product__Regular-Price" id="">
                      <del>
                        <span>{productCurrency}</span>
                        <span id="regularPrice">{productRegularPrice}</span>
                      </del>
                    </span>
                    <button className="Product__Discount-Percentage">
                      -50%
                    </button>
                  </div>
                  <div className="Main-Reviews__container">
                    <div className="Reviews-Icons__container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p>
                        <span>12</span>reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-container Product-Options_container">
                  {/* Select Input */}
                  <div className="Main-Size-Select__container">
                    <div className="">
                      <label>Color</label>
                    </div>
                    <div className="Size-Select__container">
                      <select>
                        <option value="" key="" disabled selected>
                          Please select
                        </option>
                        <option value="" key="">
                          Black
                        </option>
                        <option value="" key="">
                          White
                        </option>
                        <option value="" key="">
                          Red
                        </option>
                        <option value="" key="">
                          Blue
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Qunatity Input */}
                  <div>
                    <div className="">
                      <label>Quantity</label>
                    </div>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      defaultValue={1}
                      onChange={handlePrice}
                      id="quantity"
                    />
                  </div>
                </div>
                <div className="space-between__container Product-Quantity-Btns__container">
                  <div className="Product__Btns">
                    <button title="Buy now" className="ButNow__btn">
                      BUY NOW
                    </button>
                    <button title="Add to cart" className="AddToCart__btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                      </svg>
                      Add to cart
                    </button>
                    <button title="Add to Wishlist" className="Favoutite__btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                      </svg>
                      Add to Wishlist
                    </button>
                  </div>
                </div>
                <div className="Product-read-more__container">
                  <ReadMore
                    Title="Delivery"
                    Content="Im a shipping policy. Im a great place to add more information"
                  />
                  <ReadMore
                    Title="Return"
                    Content="Im a shipping policy. Im a great place to add more information"
                  />
                  <ReadMore
                    Title="More Info"
                    Content="Im a shipping policy. Im a great place to add more information"
                  />
                </div>
                <div>
                  <div className="flex-container Share__container">
                    <span>Share:</span>
                    <div className="Share-Social-Media__container">
                      <svg
                        title="Facebook"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                      </svg>
                      <svg
                        title="Twitter"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                      </svg>
                      <svg
                        title="Copy link"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Payment-Options__container">
                  <div title="Visa" className="Payment-Option__container">
                    <img src={Visa} alt="" />
                  </div>
                  <div title="Mastercard" className="Payment-Option__container">
                    <img src={MasterCard} alt="" />
                  </div>
                  <div title="PayPal" className="Payment-Option__container">
                    <img src={PayPal} alt="" />
                  </div>
                </div>
              </div>
            )}

            {ProductDetails && (
              <div className="Product__Details">
                <div>
                  <ol>
                    <li>
                      Color: <strong>Black</strong>
                    </li>
                    <li>
                      Dimension (L x l x h): <strong>44.5 x 39 x 143 cm</strong>
                    </li>
                    <li>
                      Capacity: <strong>3 Litres Puissance 90 Watts</strong>
                    </li>
                    <li>
                      Volts: <strong>240 Volts</strong>
                    </li>
                    <li>
                      Material: <strong>Plastic</strong>
                    </li>
                    <li>
                      Speed Number <strong>3</strong>
                    </li>
                    <li>
                      Caracteristic:{" "}
                      <strong>Vitesse élevée, Oscillation</strong>
                    </li>
                  </ol>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th key="">Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td key="">Weight</td>
                      <td key="">
                        <strong>7.00 Kg</strong>
                      </td>
                    </tr>

                    <tr>
                      <td key="">Mark</td>
                      <td key="">
                        <strong>Bricom</strong>
                      </td>
                    </tr>

                    <tr>
                      <td key="">Color</td>
                      <td key="">
                        <strong>Black</strong>
                      </td>
                    </tr>

                    <tr>
                      <td key="">Dimmension</td>
                      <td key="">
                        <strong>44.5 x 39 x 143 cm</strong>
                      </td>
                    </tr>

                    <tr>
                      <td key="">Power</td>
                      <td key="">
                        <strong>90 W</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {Reviews && (
              <div className="Product__Reviews">
                <p>Soon will be available...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
