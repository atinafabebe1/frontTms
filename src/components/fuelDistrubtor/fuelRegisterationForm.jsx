import { useState } from "react";

const FuelRegisterationForm = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fuelinfo = { plateNumber, fuelType, coupon };

    const response = await fetch("/FuelReport", {
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
      setCoupon("");
      setFuelType("");
      setPlateNumber("");
      setError(null);
      setIsValid(true);
      console.log("new added");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container align-item-center justify-content-center  border border-1 border-secondary mt-5 p-2">
          <h4 className="my-4 text-center">Vehicle Fuel Registeration Form</h4>
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
          <div className="row mb-3">
            <label htmlFor="coupons" className="form-label col-sm-3">
              Coupon
            </label>
            <input
              type="text"
              required
              className="ms-2 form-control col-sm-6 w-50"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <button className="btn btn-primary py-1">Save</button>
          {error && (
            <div>
              <p className="text-danger">{error}</p>
            </div>
          )}
          {isValid && !error && (
            <div>
              <p className="text-success">Successfully Submitted</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FuelRegisterationForm;
