import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowEmergenceReports = () => {
  const [emergenceReports, setEmergenceReports] = useState("");

  useEffect(() => {
    const FetchEmrgenceReport = async () => {
      const response = await fetch("/EmergenceReport");
      const json = await response.json();

      if (response.ok) {
        setEmergenceReports(json);
      }
    };
    FetchEmrgenceReport();
  }, []);
  return (
    <div className="container ">
      <h4>EmergenceReports</h4>
      <div className=" mt-4">
        {emergenceReports &&
          emergenceReports.map((emergenceReport) => (
            <div>
              <Link
                to={"/EmergenceReports" + emergenceReport.vehicleId}
                key={emergenceReport.userid}
              >
                {emergenceReport.plateNumber}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowEmergenceReports;
