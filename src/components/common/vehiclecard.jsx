import React from "react";
import { Link } from "react-router-dom";

const VehicleCard = (props) => {
  const vehicle = props.vehicle;

  return (
    <div className="container">
      <table className="table table-dark">
        <tr>
          <td scope="row">
            <h3 className="bold">
              <Link
                className="text-decoration-none"
                to={`/Headofdeployement/registerVehicle/${vehicle._id}`}
              >
                {vehicle.model}
              </Link>
            </h3>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default VehicleCard;
