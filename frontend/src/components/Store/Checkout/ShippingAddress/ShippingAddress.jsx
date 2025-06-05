import React from "react";

export const ShippingAddress = () => {
  return (
    <>
      <div className="ShippingAddress Checkout__container">
        <div className="Title__container">
          <span>Shipping Address</span>
          <span className="Required">* Required</span>
        </div>
        <hr />

        <div className="Inputs__List">
          <div className="input-container">
            <label>Full Name *</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label>Street Address *</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <input type="email" />
          </div>

          <div className="Inputs__container">
            <div className="input-container">
              <label>City *</label>
              <input type="text" />
            </div>

            <div className="input-container">
              <label>State/Province *</label>
              <input type="text" />
            </div>

            <div className="input-container">
              <label>Zip/Postal Code *</label>
              <input type="text" />
            </div>
          </div>

          <div className="input-container">
            <label>Street Address *</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};
