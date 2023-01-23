import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../common/login";
import Navbar from "../common/navbar";
import VehicleRequesting from "../common/request";
import ViewSchedule from "../common/viewSchedule";
import SendComplain from "../common/sendComplain";
import ApproveVehicleRequest from "./approveVehicleRequest";
import { useSelector } from "react-redux";

const NavbarVicePresident = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const title = "Vice President";
  const links = ["/vehicleRequest", "/approveVehicles", "/viewSchedule"];
  const linkName = ["Vehicle Request", "Send Complain", "View Schedule"];

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
              isLoggedIn ? <VehicleRequesting /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/sendComplain"
            element={isLoggedIn ? <SendComplain /> : <Navigate to="/login" />}
          />
          <Route
            path="/viewSchedule"
            element={isLoggedIn ? <ViewSchedule /> : <Navigate to="/login" />}
          />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default NavbarVicePresident;
