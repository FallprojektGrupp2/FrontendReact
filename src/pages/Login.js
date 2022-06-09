import React, { useState } from "react";
import { Alert } from "antd";
import Message from "../components/LogIn/message";
import Login from "../components/LogIn/LogIn-component";
import SignUp from "../components/SignUp/SignUp-component";
import "../components/LogIn/Login.css";
const LoginPage = (props) => {
  const [token, setToken] = useState();
  const [response, setResponse] = useState({});
  if (response.status !== undefined) {
    if (response.status === 200) props.setToken(token);
  }

  return (
    <div className="main">
      {response.status !== undefined ? (
        response.status === 200 ? (
          <Alert message="Login successful..." type="success" />
        ) : (
          <Alert message="Login NOT successful..." type="error" />
        )
      ) : null}
      <input type="checkbox" id="chk" name="chk" aria-hidden="true" />
      <Login setResponse={setResponse} setToken={setToken} />
      <SignUp setResponse={setResponse} />
    </div>
  );
};
export default LoginPage;
