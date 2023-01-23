import Form from "../common/form";
const SendPurchasingRequest = () => {
  const title = "Send Purchasing Request";
  const fields = ["typeOfVehicle", "plateNumber", "price", "totalPrice"];
  const types = ["text", "number", "number", "number"];
  const url = "/AccessoriesPurchasing";
  return (
    <div>
      <Form title={title} fields={fields} url={url} types={types} />
    </div>
  );
};

export default SendPurchasingRequest;
