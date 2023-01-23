import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ title, fields, url }) => {
  const dispatch = useDispatch();

  const defaultTitle = "A Form";
  const navigate = useNavigate();
  title = title || defaultTitle;

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const initialFields = {};
  fields.forEach((field) => (initialFields[field] = ""));
  const [stateFields, setStateFields] = useState(initialFields);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("ROLE_EMPLOYEE");
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();

  // const [isloggedin, setisloggedin] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(stateFields),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setfirstName(json.user.firstName);
      setlastName(json.user.lastName);
      console.log(json.user);
      setRole(json.user.role);
      dispatch(authAction.login());
      setStateFields("");
      setError(null);
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        {!isLoggedIn && (
          <div className=" pt-4 container w-50 w-md-100 mt-4">
            <h1 className="text-center m-4">{title}</h1>
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field} className="mb-3">
                  <label htmlFor={field} className="form-label">
                    {field}
                  </label>
                  <input
                    id={field}
                    type={field}
                    name={field}
                    onChange={(event) => {
                      const { name, value } = event.target;
                      setStateFields({
                        ...stateFields,
                        [event.target.name]: value,
                      });
                    }}
                    value={stateFields[field] || ""}
                    className="form-control"
                  />
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {error && <div className="text-danger">{error}</div>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormLogin;
