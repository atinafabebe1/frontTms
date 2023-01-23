import useFetch from "../common/useFetch";
import { Link } from "react-router-dom";

const ApproveFuelRequest = () => {
  const { data: fuelRequests, isLoading } = useFetch("/FuelRequest");
  const link = "/FuelRequest";
  return (
    <div>
      <div>
        {isLoading && <p>loading.....</p>}
        {fuelRequests &&
          fuelRequests.map((fuelRequest) => (
            <div>
              <Link to={link + fuelRequest._id} key={fuelRequest.id}>
                {fuelRequest.plateNumber}
              </Link>
              <p>{fuelRequest.fuelType}</p>
            </div>
          ))}
        <button className="btn btn-primary mx-2">Approve</button>
      </div>
    </div>
  );
};

export default ApproveFuelRequest;
