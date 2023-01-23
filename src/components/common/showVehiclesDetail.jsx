import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ShowVehiclesDetails = (props) => {
  let { _id } = useParams();

  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`/registerVehicle/${_id}`, {
        credentials: "include",
      });
      const json = await response.json();

      if (response.ok) {
        setVehicle(json);
      }
    };
    fetchdata();
  }, [_id]);
  let length = vehicle.assignedTo?.length;

  let vehicleItem = (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <table className="table table-hover table-dark">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ID</td>
                <td>{vehicle._id}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>model</td>
                <td>{vehicle.model}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>chassis</td>
                <td>{vehicle.chassisNumber}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Engine Number</td>
                <td>{vehicle.engineNumber}</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Plate Number</td>
                <td>{vehicle.plateNumber}</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>model</td>
                <td>{vehicle.model}</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>CC</td>
                <td>{vehicle.CC}</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>ability /Person</td>
                <td>{vehicle.ability?.person}</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>CurrentSitutation</td>
                <td>{vehicle.CurrentSitutation}</td>
              </tr>
              {length && (
                <tr>
                  <th scope="row">9</th>
                  <td>Permanently Assigned</td>
                  <td>
                    {vehicle.assignedTo?.[length - 1].permanentlyAssigned}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-5 px-5 ">
          <Link
            to={"/Headofdeployement/VehiclesEmergenceReports/" + vehicle._id}
            className="btn btn-outline-dark mb-3 "
          >
            Show Emergence Report with the Vehicle
          </Link>
          <Link
            to={"/Headofdeployement/assign/" + vehicle._id}
            className="btn btn-outline-dark "
          >
            Permanently assign
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <h3>Fuel information</h3>
          {vehicle.fuelinfo?.map((info) => {
            return (
              <div>
                <p>Date: {info.createdAt}</p>
                <p>coupon No: {info.coupon}</p>
                <p>fueltype : {info.fuelType}</p>
              </div>
            );
          })}
        </div>
        <div className="col-5">
          <h3>Maintenance Information</h3>
          {vehicle.maintenanceInfo?.map((info) => {
            return (
              <div>
                <p>Date: {info.createdAt}</p>
                <p>Item name : {info.itemName}</p>
                <p>Price: {info.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ShowVehiclesDetails">
      <div className="container">
        <div className="row">
          <br />
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Vehicle's Information</p>
            <hr /> <br />
          </div>
        </div>
        <div>{vehicleItem}</div>
      </div>
    </div>
  );
};

export default ShowVehiclesDetails;
