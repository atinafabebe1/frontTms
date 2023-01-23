import Form from "../common/form";
const SendMaintenanceReport = () => {
  const title = "Maintenance Report";
  const fields = ["plateNumber", "itemName", "price"];
  const types = ["number", "text", "number"];
  const url = "/MaintenanceReport";
  return (
    <div>
      <Form title={title} fields={fields} url={url} types={types} />
    </div>
  );
};

export default SendMaintenanceReport;
