import Form from "./form";
const SendComplain = () => {
  const title = "Send Complain";
  const fields = ["feedback"];
  const url = "/Complains";
  return (
    <div>
      <Form title={title} fields={fields} url={url} />
    </div>
  );
};

export default SendComplain;
