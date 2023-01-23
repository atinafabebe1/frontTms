import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../common/login";
import Navbar from "../common/navbar";
import ApprovePurchaseRequest from "./approvePurchasedRequest";
import MonthlyReport from "../common/monthlyReport";
import { useSelector } from "react-redux";

const NavbarDirector = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Director";
  const links = ["/Director/Requests", "/Director/Reports"];
  const linkName = ["Requests", "Reports"];

  return (
    <div>
      <Navbar title={title} links={links} linkName={linkName} />
      <Routes>
        <Route
          path="/Requests/*"
          element={
            isLoggedIn ? (
              <ApprovePurchaseRequest />
            ) : (
              <Navigate to="/Director/login" />
            )
          }
        />
        <Route
          path="/Reports"
          element={
            isLoggedIn ? <MonthlyReport /> : <Navigate to="/Director/login" />
          }
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? <Login /> : <Navigate to="/Director/Requests" />
          }
        />
      </Routes>
    </div>
  );
};

export default NavbarDirector;
