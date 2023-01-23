import Form from "../common/form";
const VehicleTransfer = () => {
  const title = "Vehicle Transfer";
  const fields = ["date", "modelOfVehicle", "VIN"];
  const types = ["date", "text", "number"];
  const url = "/VehicleTransfer";
  return (
    <div>
      <Form title={title} fields={fields} url={url} types={types} />
    </div>
  );
};

export default VehicleTransfer;
