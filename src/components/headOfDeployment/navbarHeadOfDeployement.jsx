import { useSelector } from "react-redux";
import Navbar from "../common/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import ShowVehiclesList from "../common/showVehicles";
import RegisterVehicle from "./regitserVehicle";
import Login from "../common/login";
import RecieveComplain from "./recieveComplain";
import ApproveFuelRequest from "./approveFuelRequests";
import AddSchedule from "./addSchedule";
import ViewDetailEmergenceReport from "./viewDetialEmergenceReports";
import Signup from "../common/signup";
import ShowVehiclesDetails from "../common/showVehiclesDetail";
import AssignVehicle from "./assignVehicle";
import UserInformation from "../common/userInfo";

const HomeHeadOfDeployment = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Head Of Deployment";
  const links = [
    "/Headofdeployement/viewVehicleslist/",
    "/Headofdeployement/complains",
    "/Headofdeployement/Requests",
    "/Headofdeployement/Schedule",
  ];
  const linkName = ["Vehicles", "Complain", "Requests", "Schedule", "SignUp"];

  return (
    <div>
      <Navbar key="1" title={title} links={links} linkName={linkName} />

      <div className="container">
        <div className="row">
          <div>
            <Routes>
              <Route
                exact
                path="/viewVehicleslist/*"
                element={
                  isLoggedIn ? (
                    <ShowVehiclesList />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
            </Routes>
            <Routes>
              <Route
                path="/registerVehicle/:_id"
                element={
                  isLoggedIn ? (
                    <ShowVehiclesDetails />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/registerVehicle"
                element={
                  isLoggedIn ? (
                    <RegisterVehicle />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/VehiclesEmergenceReports/:id"
                element={
                  isLoggedIn ? (
                    <ViewDetailEmergenceReport />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/complains"
                element={
                  isLoggedIn ? (
                    <RecieveComplain />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/Requests"
                element={
                  isLoggedIn ? (
                    <ApproveFuelRequest />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/schedule"
                element={
                  isLoggedIn ? (
                    <AddSchedule />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/assign/:id"
                element={
                  isLoggedIn ? (
                    <AssignVehicle />
                  ) : (
                    <Navigate to="/Headofdeployement/login" />
                  )
                }
              />
              <Route
                path="/login"
                element={
                  !isLoggedIn ? (
                    <Login />
                  ) : (
                    <Navigate to="/Headofdeployement/viewVehicleslist/" />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  !isLoggedIn ? (
                    <Signup />
                  ) : (
                    <Navigate to="/Headofdeployement/viewVehicleslist/" />
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

export default HomeHeadOfDeployment;
