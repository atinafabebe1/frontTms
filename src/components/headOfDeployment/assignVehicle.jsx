import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AssignVehicle = () => {
  const [permanentlyAssigned, setAssign] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  let { id } = useParams();

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    // if (!user) {
    //   setError("You must be logged in");
    //   return;
    // }
    const info = { permanentlyAssigned };
    const response = await fetch("/AssignVehicle/" + id, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setAssign("");
      setError(null);
      navigate(-1);
    }
  };
  console.log(typeof id);
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Permanently assign for
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-control w-25"
            onChange={(e) => setAssign(e.target.value)}
            value={permanentlyAssigned}
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

export default AssignVehicle;
