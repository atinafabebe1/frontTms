import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../common/login";
import Navbar from "../common/navbar";
import ApproveFuelRequest from "./approveFuelRequest";
import FuelRegisterationForm from "./fuelRegisterationForm";

const NavbarFuelDistrubtor = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Fuel Distrubtor";
  const links = [
    "/fuelDistrubtor/RegisterFuel",
    "/fuelDistrubtor/approveFuelRequests",
  ];
  const linkName = ["Fuel Register", "Requests"];
  return (
    <div>
      <Navbar
        title={title}
        links={links}
        linkName={linkName}
        key="1"
        selected={true}
      />
      <Routes>
        <Route
          path="/RegisterFuel"
          element={
            isLoggedIn ? (
              <FuelRegisterationForm />
            ) : (
              <Navigate to="/fuelDistrubtor/login" />
            )
          }
        />
        <Route
          path="/approveFuelRequests"
          element={
            isLoggedIn ? (
              <ApproveFuelRequest />
            ) : (
              <Navigate to="/fuelDistrubtor/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login />
            ) : (
              <Navigate to="/fuelDistrubtor/RegisterFue" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default NavbarFuelDistrubtor;
