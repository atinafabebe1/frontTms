import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function RegisterVehicle() {
  const [model, setModel] = useState("");
  const [engineNumber, setengineNumber] = useState("");
  const [purchasedPrice, setpurchasedPrice] = useState("");
  const [plateNumber, setplateNumber] = useState("");
  const [person, setperson] = useState("");
  const [quintal, setquintal] = useState("");
  const [liter, setliter] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [CC, setCC] = useState("");
  const [purchasedDay, setPurchasedDay] = useState("");
  const [typeOfFuel, setTypeOfFuel] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemNumber, setNumber] = useState("");
  const [CurrentSitutation, setCurrentSitutation] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  /*
  feature
  const [item, setItem] = useState([]);
  const handleAdd = () => {
    const items = [...item, []];
    setItem(items);
  };

  const handleRemove = (i) => {
    const remove = [...item];
    remove.splice(i, 1);
    setItem(remove);
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!user) {
    //   setError("You must be logged in");
    //   return;
    // }

    const vehicleInfo = {
      model,
      engineNumber,
      purchasedPrice,
      plateNumber,
      person,
      quintal,
      liter,
      chassisNumber,
      CC,
      purchasedDay,
      typeOfFuel,
      itemName,
      itemNumber,
      CurrentSitutation,
    };

    const response = await fetch("/RegisterVehicle", {
      method: "POST",
      body: JSON.stringify(vehicleInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      navigate(-1);
      setModel("");
      setengineNumber("");
      setpurchasedPrice("");
      setplateNumber("");
      setperson("");
      setquintal("");
      setliter("");
      setChassisNumber("");
      setCC("");
      setPurchasedDay("");
      setTypeOfFuel("");
      setItemName("");
      setNumber("");
      setCurrentSitutation("");
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="my-5 ">
      <h1 className=" text-dark my-4 py-4 text-center">
        Vehicle Registeration Form
      </h1>
      <div className="container  form-group form-group-lg w-100">
        <div className="row border border-1 border-dark my-4  py-2 ">
          <h4 className="h-4 p-2">Vehicle Information</h4>
          <div className="col-md-5">
            <div>
              <div className="row mb-2">
                <label htmlFor="model" className="col-sm-3 col-form-label">
                  Model
                </label>
                <div className="col-sm-5">
                  <input
                    id="model"
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setModel(e.target.value)}
                    value={model}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <label htmlFor="engineNo" className="col-sm-3 col-form-label">
                  Engine No
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setengineNumber(e.target.value)}
                    value={engineNumber}
                    id="engineNo"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <label htmlFor="purchase" className="col-sm-3 col-form-label">
                  purchased Price
                </label>
                <div className="col-sm-5">
                  <input
                    min={0.0}
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setpurchasedPrice(e.target.value)}
                    value={purchasedPrice}
                    id="purchase"
                  />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="serialNo" className="col-sm-3 col-form-label">
                  Plate Number
                </label>
                <div className="col-sm-5">
                  <input
                    min={0}
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setplateNumber(e.target.value)}
                    value={plateNumber}
                    id="serialNo"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <label htmlFor="person" className="col-sm-2 col-form-label">
                  Ability
                </label>
                <div className="col-sm-3">
                  <input
                    placeholder="person"
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setperson(e.target.value)}
                    value={person}
                    id="person"
                    min={0}
                  />
                </div>
                <div className="col-sm-3">
                  <input
                    placeholder="quintel"
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setquintal(e.target.value)}
                    value={quintal}
                    id="person"
                    min={0}
                  />
                </div>
                <div className="col-sm-3">
                  <input
                    placeholder="liter"
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setliter(e.target.value)}
                    value={liter}
                    id="person"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row mb-2">
              <label htmlFor="chassis" className="col-sm-3 col-form-label">
                Chassis No
              </label>
              <div className="col-sm-5">
                <input
                  min={0}
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setChassisNumber(e.target.value)}
                  value={chassisNumber}
                  id="chassis"
                />
              </div>
            </div>
            <div className="row mb-2">
              <label htmlFor="cc" className="col-sm-3 col-form-label">
                CC
              </label>
              <div className="col-sm-5">
                <input
                  min={0}
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setCC(e.target.value)}
                  value={CC}
                  id="cc"
                />
              </div>
            </div>
            <div className="row mb-2">
              <label htmlFor="purchaseday" className="col-sm-3 col-form-label">
                Purchased Day
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  className="form-control"
                  required
                  onChange={(e) => setPurchasedDay(e.target.value)}
                  value={purchasedDay}
                  id="purchaseday"
                />
              </div>
            </div>
            <div className="row mb-2">
              <label htmlFor="typeoffuel" className="col-sm-3 col-form-label">
                Type of Fuel Used
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setTypeOfFuel(e.target.value)}
                  value={typeOfFuel}
                  id="typeoffuel"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={() => handleAdd()}
          className="btn btn-secondary btn small my-2 py-0"
          >
          Add
          </button>
          {item.map((a, i) => {
          return ( */}
        <div>
          <span className="my-2 me-2 ">
            Add available item with the vehicle
          </span>
          <div className="row my-2">
            <div className="col-md-6 text-center">
              <label htmlFor="ItemName" className="form-label">
                Item Name :
              </label>
              <input
                type="text"
                id="ItemName"
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
              />
            </div>
            <div className="col-md-6 text-center">
              <label htmlFor="itemNo" className="form-label">
                No :
              </label>
              <input
                type="number"
                id="itemNo"
                onChange={(e) => setNumber(e.target.value)}
                value={itemNumber}
              />
            </div>
            {/* <button
              //onClick={() => handleRemove(i)}
              type="button"
              className="btn btn-danger ms-2 mb-1 remove-btn btn-sm"
            >
              <span>remove</span>
            </button> */}
          </div>
        </div>
        {/* );
        })} */}
        <div className=" row my-2">
          <span htmlFor="mode" className="text-bold form-label col-sm-3">
            Current situation of vehicle
          </span>
          <div className="col-sm-5">
            <textarea
              id="mode"
              cols="40"
              rows="3"
              className="form-control resize-none"
              placeholder="Current Situation of vehicle..........."
              required
              onChange={(e) => setCurrentSitutation(e.target.value)}
              value={CurrentSitutation}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {error && (
          <div>
            <p clas>{error}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default RegisterVehicle;
