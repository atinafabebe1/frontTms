import React, { useState } from "react";

const EmergenceReport = () => {
  const [plateNumber, setplateNUmber] = useState("");
  const [type, setType] = useState("");
  const [properties, setProperties] = useState("");
  const [address, setaddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [insurance, setinsurance] = useState("");
  const [injuries, setInjuries] = useState("");
  const [death, setDeath] = useState("");
  const [damagedProperties, setDamagedProperties] = useState("");
  const [witnessName, setWitnessName] = useState("");
  const [witnessAddress, setWitnessAddreess] = useState("");
  const [trafficName, setTrafficName] = useState("");
  const [error, setError] = useState(null);
  const [isValid, setisValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emergenceReportinfo = {
      plateNumber,
      type,
      properties,
      address,
      phoneNumber,
      driverName,
      insurance,
      injuries,
      death,
      damagedProperties,
      witnessName,
      witnessAddress,
      trafficName,
    };
    const response = await fetch("/EmergenceReport", {
      method: "POST",
      body: JSON.stringify(emergenceReportinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setisValid(false);
      setError(json.error);
    }
    if (response.ok) {
      setplateNUmber("");
      setType("");
      setProperties("");
      setaddress("");
      setPhoneNumber("");
      setDriverName("");
      setinsurance("");
      setInjuries("");
      setDeath("");
      setDamagedProperties("");
      setWitnessName("");
      setWitnessAddreess("");
      setTrafficName("");
      setisValid(true);
      setError(null);
      console.log("new added");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-lg p-3 ">
        <h1 className="display-6 text-center text-danger">
          Emergence Report Form
        </h1>
        <div className="row border-1 border-danger">
          <div className="col-12 p-2 mx-2 ">
            <p className="lead">Vehicle information</p>
            <div className="row">
              <div className="col-5">
                <div className="mb-2 row">
                  <label htmlFor="plateNumber" className="form-label col-sm-3">
                    Plate Number
                  </label>
                  <input
                    id="plateNumber"
                    type="number"
                    min={0}
                    max={9999}
                    required
                    className="form-control mx-2 w-50 col-sm-7"
                    onChange={(e) => setplateNUmber(e.target.value)}
                    value={plateNumber}
                  />
                </div>
                <div className="mb-2 row">
                  <label htmlFor="typeof" className="form-label col-sm-3">
                    type
                  </label>
                  <input
                    id="typeof"
                    type="text"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  />
                </div>
                <div className="mb-2 row">
                  <label htmlFor="Propertys" className="form-label col-sm-3">
                    Property's
                  </label>
                  <input
                    id="Propertys"
                    type="number"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setProperties(e.target.value)}
                    value={properties}
                  />
                </div>
                <div className="mb-2 row">
                  <label htmlFor="address" className="form-label col-sm-3">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setaddress(e.target.value)}
                    value={address}
                  />
                </div>{" "}
              </div>
              <div className="col-5">
                <div className="mb-2 row">
                  <label htmlFor="PhoneNo" className="form-label col-sm-3">
                    Phone No
                  </label>
                  <input
                    id="PhoneNo"
                    type="number"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <div className="mb-2 row">
                  <label htmlFor="drivername" className="form-label col-sm-3">
                    Driver Name
                  </label>
                  <input
                    id="drivername"
                    type="text"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setDriverName(e.target.value)}
                    value={driverName}
                  />
                </div>
                <div className="mb-2 row">
                  <label htmlFor="insurance" className="form-label col-sm-3">
                    Insurance
                  </label>
                  <input
                    id="insurance"
                    type="text"
                    className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                    onChange={(e) => setinsurance(e.target.value)}
                    value={insurance}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-12">
            <p className="lead">
              People were in the vehicle during the accident.{" "}
            </p>
            <div className="mb-2 row">
              <label htmlFor="injuries" className="form-label col-sm-3">
                Injuries
              </label>
              <input
                id="injuries"
                type="number"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setInjuries(e.target.value)}
                value={injuries}
              />
            </div>
            <div className="mb-2 row">
              <label htmlFor="death" className="form-label col-sm-3">
                death
              </label>
              <input
                id="death"
                type="number"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setDeath(e.target.value)}
                value={death}
              />
            </div>
            <div className="mb-2 row">
              <label
                htmlFor="damagedproperties"
                className="form-label col-sm-3"
              >
                Damaged Properties
              </label>
              <input
                id="damagedproperties"
                type="number"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setDamagedProperties(e.target.value)}
                value={damagedProperties}
              />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <p className="lead">Witness who were during the accident</p>
            <div className="mb-2 row">
              <label htmlFor="name" className="form-label col-sm-3">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setWitnessName(e.target.value)}
                value={witnessName}
              />
            </div>
            <div className="mb-2 row">
              <label htmlFor="Address" className="form-label col-sm-3">
                Address
              </label>
              <input
                id="Address"
                type="text"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setWitnessAddreess(e.target.value)}
                value={witnessAddress}
              />
            </div>
            <p className="lead">
              Traffic that recordered details of the accident
            </p>
            <div className="mb-2 row">
              <label htmlFor="Name" className="form-label col-sm-3">
                Name
              </label>
              <input
                id="Name"
                type="text"
                className="form-control mx-2 w-50 w-sm-75 col-sm-7"
                onChange={(e) => setTrafficName(e.target.value)}
                value={trafficName}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && (
          <div className="text-danger">
            <p>{error}</p>
          </div>
        )}
        {isValid && !error && (
          <div className="text-success">
            <p>Successfully submitted</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default EmergenceReport;
