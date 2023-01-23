import { useState } from "react";

const FuelRequesting = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [KilometerOnCounter, setKilometerOnCounter] = useState("");
  const [typeofVehicle, settypeofVehicle] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [isvalid, setIsValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fuelinfo = {
      KilometerOnCounter,
      typeofVehicle,
      amount,
      plateNumber,
      fuelType,
    };

    const response = await fetch("/FuelRequest", {
      method: "POST",
      body: JSON.stringify(fuelinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setFuelType("");
      setPlateNumber("");
      setKilometerOnCounter("");
      settypeofVehicle("");
      setAmount("");
      setError(null);
      setIsValid(true);
      console.log("new added");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container align-item-center justify-content-center  border border-1 border-secondary mt-5 p-2">
          <h4 className="my-4 text-center"> Fuel Requesting Form</h4>
          <div className="mb-3 row ">
            <label htmlFor="plateNo" className="form-label col-sm-3">
              Plate Number
            </label>
            <input
              min={0}
              required
              id="plateNo"
              type="number"
              className="ms-2 form-control col-sm-6 w-50"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
            />
          </div>
          <div className="mb-3 row ">
            <label htmlFor="km" className="form-label col-sm-3">
              Km on a counter
            </label>
            <input
              min={0}
              required
              id="km"
              type="number"
              className="ms-2 form-control col-sm-6 w-50"
              value={KilometerOnCounter}
              onChange={(e) => setKilometerOnCounter(e.target.value)}
            />
          </div>
          <div className="mb-3 row ">
            <label htmlFor="typeofVehicle" className="form-label col-sm-3">
              Type of Vehicle
            </label>
            <input
              min={0}
              required
              id="typeofVehicle"
              type="text"
              className="ms-2 form-control col-sm-6 w-50"
              value={typeofVehicle}
              onChange={(e) => settypeofVehicle(e.target.value)}
            />
          </div>
          <div className="mb-3 row ">
            <label htmlFor="amount" className="form-label col-sm-3">
              Amount
            </label>
            <input
              min={0}
              required
              id="amount"
              type="number"
              className="ms-2 form-control col-sm-6 w-50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="fueltype" className="from-label col-sm-3">
              Fuel Type
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="fuel"
                name="fuelType1"
                required
                value="fuel"
                onChange={(e) => setFuelType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="fuel">
                Fuel
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="motor-oil"
                name="fuelType1"
                required
                value="motor-oil"
                onChange={(e) => setFuelType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="motor-oil">
                Motor oil
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="frenoil"
                name="fuelType1"
                required
                value="fren-oil"
                onChange={(e) => setFuelType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="frenoil">
                Fren oil
              </label>
            </div>
          </div>
          <button className="btn btn-primary py-1">Submit</button>
          {error && (
            <div>
              <p className="text-danger">{error}</p>
            </div>
          )}
          {isvalid && !error && (
            <div>
              <p className="text-success">Your request is successfully sent</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FuelRequesting;
