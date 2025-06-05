import React from "react";

export const ShippingMethod = () => {
  return (
    <>
      <div className="Checkout__container">
        <div className="Title__container">
          <span>Shipping Method</span>
        </div>
        <hr />
        <div className="input-container">
          <p>No shipping methods are available for the address given.</p>
        </div>
      </div>
    </>
  );
};
