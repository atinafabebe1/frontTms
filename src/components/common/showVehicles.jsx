import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VehicleCard from "./vehiclecard";

const ShowVehiclesList = (props) => {
  const [vehicles, setVehicles] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("/RegisterVehicle", {
        headers: {},
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setVehicles(json);
      }
      setIsLoading(false);
    };
    fetchdata();
  }, []);
  const Vehicles = vehicles;
  let vehicleList;
  if (isLoading) {
    vehicleList = "loading....";
  } else if (!Vehicles || Vehicles.length === 0) {
    vehicleList = "there is no vehicle record!";
  } else {
    vehicleList = Vehicles.map((vehicle, k) => (
      <VehicleCard vehicle={vehicle} key={k} />
    ));
  }
  return (
    <div>
      <div className="ShowvehicleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Vehicles List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/Headofdeployement/registerVehicle/"
                className="btn btn-outline-dark "
              >
                + Add New Vehicle
              </Link>

              <br />
              <br />
              <hr />
            </div>
          </div>
          {!error && <div className="list ">{vehicleList}</div>}
          {error && (
            <div className="text-danger my-3">
              {" "}
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowVehiclesList;
