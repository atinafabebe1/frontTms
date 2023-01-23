import Navbar from "../common/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import MaintenanceReportAdd from "./addMaintenanceReport";
import Login from "../common/login";
import MaintenanceOrders from "./maintenanceOrders";
import { useSelector } from "react-redux";

const NavbarMechanic = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const title = "Mechanic";
  const links = ["/Mechanic/maintenanceReport", "/Mechanic/Orders"];
  const linkName = ["Make Mainteannce Report", "Maintenance Orders"];
  return (
    <div>
      <Navbar key="1" title={title} links={links} linkName={linkName} />
      <div className="container mt-4">
        <Routes>
          <Route
            exact
            path="/maintenanceReport"
            element={
              isLoggedIn ? (
                <MaintenanceReportAdd />
              ) : (
                <Navigate to="/Mechanic/login" />
              )
            }
          />
          <Route
            path="/Orders"
            element={
              isLoggedIn ? (
                <MaintenanceOrders />
              ) : (
                <Navigate to="/Mechanic/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login />
              ) : (
                <Navigate to="/Mechanic/vehicleRequest" />
              )
            }
          />{" "}
        </Routes>
      </div>
    </div>
  );
};

export default NavbarMechanic;
