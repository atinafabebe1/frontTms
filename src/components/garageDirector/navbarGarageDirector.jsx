import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../common/navbar";
import ApproveMainetenaceOrder from "./approveMaintenanceOrder";
import SendPurchasingRequest from "./SendPurchasingRequest";
import LoginForm from "../common/login";
import SendMaintenanceOrder from "./sendMaintenanceOrder";

const NavbarGargeDirector = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Garage Director";
  const links = [
    "/GarageDirector/MaintenanceRequests",
    "/GarageDirector/sendMaintenanceOrder",
    "/GarageDirector/PurchasingRequests",
  ];
  const linkName = ["Maintenance", "Send Maintenance Order", "Purchasing"];
  return (
    <div>
      <Navbar title={title} links={links} linkName={linkName} key="1" />
      <Routes>
        <Route
          path="/MaintenanceRequests"
          element={
            isLoggedIn ? (
              <ApproveMainetenaceOrder />
            ) : (
              <Navigate to="/GarageDirector/login" />
            )
          }
        />
        <Route
          path="/sendMaintenanceOrder"
          element={
            isLoggedIn ? (
              <SendMaintenanceOrder />
            ) : (
              <Navigate to="/GarageDirector/login" />
            )
          }
        />
        <Route
          path="/PurchasingRequests"
          element={
            isLoggedIn ? (
              <SendPurchasingRequest />
            ) : (
              <Navigate to="/GarageDirector/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginForm />
            ) : (
              <Navigate to="/GarageDirector/MaintenanceRequests" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default NavbarGargeDirector;
