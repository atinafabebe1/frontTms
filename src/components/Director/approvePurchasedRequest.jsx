import { Link } from "react-router-dom";
import useFetch from "../common/useFetch";

const ApprovePurchaseRequest = () => {
  const { data: purchaseRequests, isLoading } = useFetch(
    "/AccessoriesPurchasing"
  );
  const link = "/AccessoriesPurchasing";
  return (
    <div className="container ">
      <h4>Requests</h4>
      <div className=" mt-4">
        {isLoading && <p>loading.....</p>}
        {purchaseRequests &&
          purchaseRequests.map((purchasedRequest) => (
            <div>
              <Link
                to={link + "/" + purchasedRequest._id}
                key={purchasedRequest.id}
              >
                {purchasedRequest.typeOfVehicle}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApprovePurchaseRequest;
