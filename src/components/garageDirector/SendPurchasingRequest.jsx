import { Alert } from "bootstrap";
import React, { Component } from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const MakePurchasingRequest = () => {
  const [typeOfVehicle, setTypeofVehicle] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [price, setPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const purchasingRequest = {
      typeOfVehicle,
      plateNumber,
      price,
      totalPrice,
    };

    const response = await fetch("/AccessoriesPurchasing", {
      method: "POST",
      body: JSON.stringify(purchasingRequest),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setTypeofVehicle("");
      setPlateNumber("");
      setPrice("");
      setTotalPrice("");
      setIsValid(true);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="my-3">
        <div className="mb-3">
          <label htmlFor="itemname" className="form-label">
            Type of Vehicle
          </label>
          <input
            type="text"
            className="form-control "
            id="itemname"
            onChange={(e) => setTypeofVehicle(e.target.value)}
            value={typeOfVehicle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemname" className="form-label">
            Plate Number
          </label>
          <input
            type="number"
            className="form-control "
            id="itemname"
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemname" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control "
            id="itemname"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemnumber" className="form-label">
            Total Price
          </label>
          <input
            type="number"
            id="itemnumber"
            className="form-control "
            onChange={(e) => setTotalPrice(e.target.value)}
            value={totalPrice}
          />
          <button type="submit" className="btn btn-primary my-2">
            Submit
          </button>
          {error && <div className="text-danger">{error}</div>}
          {isValid && !error && (
            <div className="text-success my-3">Successfully Submited</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MakePurchasingRequest;
