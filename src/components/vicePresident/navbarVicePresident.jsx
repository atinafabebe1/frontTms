import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../common/login";
import Navbar from "../common/navbar";
import VehicleRequesting from "../employee/request";
import ViewSchedule from "../common/scheduleview";
import ApproveVehicleRequest from "./approveVehicleRequest";

const NavbarVicePresident = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Vice President";
  const links = [
    "/VicePresident/vehicleRequest",
    "/VicePresident/approveVehicles",
    "/VicePresident/viewSchedule",
  ];
  const linkName = ["Vehicle Request", "Approve Request", "View Schedule"];

  return (
    <div>
      <Navbar
        key="1"
        title={title}
        links={links}
        linkName={linkName}
        selected={true}
      />
      <div className="container mt-4">
        <Routes>
          <Route
            exact
            path="/vehicleRequest"
            element={
              isLoggedIn ? (
                <VehicleRequesting />
              ) : (
                <Navigate to="/VicePresident/login" />
              )
            }
          />
          <Route
            path="/approveVehicles"
            element={
              isLoggedIn ? (
                <ApproveVehicleRequest />
              ) : (
                <Navigate to="/VicePresident/login" />
              )
            }
          />
          <Route
            path="/viewSchedule"
            element={
              isLoggedIn ? (
                <ViewSchedule />
              ) : (
                <Navigate to="/VicePresident/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login />
              ) : (
                <Navigate to="/VicePresident/vehicleRequest" />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default NavbarVicePresident;
