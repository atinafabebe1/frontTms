import { useState } from "react";

const MaintenanceReportAdd = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportsinfo = { plateNumber, itemName, price };

    const response = await fetch("/MaintenanceReport", {
      method: "POST",
      body: JSON.stringify(reportsinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    console.log(json);

    if (response.ok) {
      setItemName("");
      setPlateNumber("");
      setPrice("");
      setError(null);
      console.log("new added");
    }
  };

  return (
    <div className="container-lg d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit}
        className=" pt-4 container w-50 w-md-100 mt-4"
      >
        <h4 className="display-6 text-success mb-3 text-center">
          Maintenance Report Form
        </h4>
        <div className="mb-2">
          <label htmlFor="platenumber" className="form-label">
            Plate Number
          </label>
          <input
            id="platenumber"
            type="number"
            className="form-control "
            required
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="itemname" className="form-label">
            Item Name
          </label>
          <input
            id="itemname"
            type="text"
            className="form-control "
            required
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default MaintenanceReportAdd;
