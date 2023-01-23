import Form from "./formLogin";
const SignUp = () => {
  const title = "SignUp Form";
  const fields = [
    "First_Name",
    "Last_Name",
    "Username",
    "Password",
    "role",
    "phoneNumber",
  ];
  const url = "/user/register";
  return (
    <div>
      <Form title={title} fields={fields} url={url} />
    </div>
  );
};

export default SignUp;
