import Form from "../common/form";

const VehicleRequesting = () => {
  const title = "Vehicle Request";
  const fields = ["purpose", "destination", "from", "to"];
  const types = ["text", "text", "text", "text"];
  const url = "/vehicleRequest";
  return (
    <div>
      <Form title={title} fields={fields} url={url} types={types} />
    </div>
  );
};

export default VehicleRequesting;
