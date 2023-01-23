import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../common/login";
import Navbar from "../common/navbar";
import UserInformation from "../common/userInfo";
import EmergenceReport from "./emergenceReport";
import FuelRequesting from "./fuelRequesting";
import Notification from "./notification";
import RecieveVehicle from "./recieveVehicle";
import VehicleTransfer from "./vehicleTransferRequest";

const NavbarDriver = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Driver";
  const links = [
    "/Driver/EmegernceReport",
    "/Driver/Notification",
    "/Driver/fuelRequest",
    "/Driver/RecieveVehicle",
    "/Driver/VehicleTransfers",
  ];
  const linkName = [
    "Report",
    "Notifications",
    "Fuel Requests",
    "Recieve Vehicle",
    "Vehicle Transfer",
  ];
  return (
    <div>
      <Navbar
        title={title}
        links={links}
        linkName={linkName}
        key="1"
        selected={true}
      />
      <div className="container">
        <div className="row">
          <div>
            <Routes>
              <Route
                exact
                path="/EmegernceReport"
                element={
                  isLoggedIn ? (
                    <EmergenceReport />
                  ) : (
                    <Navigate to="/Driver/login" />
                  )
                }
              />
              <Route
                path="/Notification"
                element={
                  isLoggedIn ? (
                    <Notification />
                  ) : (
                    <Navigate to="/Driver/login" />
                  )
                }
              />
              <Route
                path="/fuelRequest"
                element={
                  isLoggedIn ? (
                    <FuelRequesting />
                  ) : (
                    <Navigate to="/Driver/login" />
                  )
                }
              />
              <Route
                path="/RecieveVehicle"
                element={
                  isLoggedIn ? (
                    <RecieveVehicle />
                  ) : (
                    <Navigate to="/Driver/login" />
                  )
                }
              />
              <Route
                path="/VehicleTransfers"
                element={
                  isLoggedIn ? (
                    <VehicleTransfer />
                  ) : (
                    <Navigate to="/Driver/login" />
                  )
                }
              />
              <Route
                path="/login"
                element={
                  !isLoggedIn ? (
                    <Login />
                  ) : (
                    <Navigate to="/Driver/EmegernceReport" />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDriver;
