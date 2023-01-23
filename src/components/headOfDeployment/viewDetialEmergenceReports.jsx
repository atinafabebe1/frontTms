import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ViewDetailEmergenceReport = (props) => {
  const [emergenceReports, setEmergenceReports] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`/EmergenceReport/${id}`, {
        headers: {},
      });
      const json = await response.json();

      if (response.ok) {
        setEmergenceReports(json);
      }
    };
    // if (user) {
    //   fetchdata();
    // }
    fetchdata();
  }, [id]);

  let EmergenceReportsItems;
  console.log(emergenceReports);

  if (emergenceReports.length === 0) {
    EmergenceReportsItems =
      "There is no emergence records with this vehicle yet";
  } else {
    EmergenceReportsItems = emergenceReports?.map((emergenceReports) => {
      return (
        <div className="container" key={emergenceReports.createdAt}>
          <div>
            <h4>Date NO: {emergenceReports.createdAt}</h4>
            <p>Plate NO: {emergenceReports.plateNumber}</p>
            <p>Place: {emergenceReports.place}</p>
            <p>Type: {emergenceReports.type}</p>
            <p>Address: {emergenceReports.address}</p>
            <p>Death: {emergenceReports.death}</p>
            <p>Driver Name: {emergenceReports.driverName}</p>
            <p>Injuries: {emergenceReports.injuries}</p>
            <p>Phone NUmber: {emergenceReports.phoneNumber}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ShowVehiclesDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Emergence's Record</h1>
            <br /> <br />
          </div>
        </div>
        <div>{EmergenceReportsItems}</div>
      </div>
    </div>
  );
};

export default ViewDetailEmergenceReport;
