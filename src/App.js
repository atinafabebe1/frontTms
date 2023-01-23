import { Route, Router, Routes } from "react-router-dom";
import NavbarDirector from "./components/Director/navbarDirector";
import NavbarDriver from "./components/driver/navbardriver";
import NavbarFuelDistrubtor from "./components/fuelDistrubtor/navbarFuelDistrubtor";
import NavbarGargeDirector from "./components/garageDirector/navbarGarageDirector";
import HomeHeadOfDeployment from "./components/headOfDeployment/navbarHeadOfDeployement";
import NavbarMechanic from "./components/mechanic/navbarMechanic";
import NavbarVicePresident from "./components/vicePresident/navbarVicePresident";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Driver/*" element={<NavbarDriver />} />
        <Route path="/Director/*" element={<NavbarDirector />} />
        <Route path="/Fueldistrubtor/*" element={<NavbarFuelDistrubtor />} />
        <Route path="/GarageDirector/*" element={<NavbarGargeDirector />} />
        <Route path="/Mechanic/*" element={<NavbarMechanic />} />
        <Route path="/VicePresident/*" element={<NavbarVicePresident />} />
        <Route path="/Headofdeployement/*" element={<HomeHeadOfDeployment />} />
      </Routes>
    </div>
  );
}

export default App;
