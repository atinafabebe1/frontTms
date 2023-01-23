import { useState } from "react";

const Form = ({ title, fields, url, types }) => {
  const defaultTitle = "A Form";
  title = title || defaultTitle;

  let index = 0;

  const initialFields = {};
  fields.forEach((field) => (initialFields[field] = ""));
  const [stateFields, setStateFields] = useState(initialFields);
  const [error, setError] = useState(null);
  const [isSuccessful, setIsSuccesful] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(stateFields),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setIsSuccesful(true);
      setStateFields("");
      setError(null);
    }
  };

  return (
    <div className="pt-4 container w-50 w-md-100 mt-4">
      <div>
        <h1 className="text-center text-success ">{title}</h1>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field} className="mb-3">
              <label htmlFor={field} className="form-label">
                {field}
              </label>
              <input
                id={field}
                type={types[index++]}
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
          {isSuccessful && (
            <div className="text-success">Submitted Successfully</div>
          )}
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;
