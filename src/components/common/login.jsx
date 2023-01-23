import Form from "./formLogin";
const Login = () => {
  const title = "Login Form";
  const fields = ["Username", "Password"];
  const url = "/user/login";
  return (
    <div>
      <Form title={title} fields={fields} url={url} />
    </div>
  );
};

export default Login;
