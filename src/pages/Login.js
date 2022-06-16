import React, { useState, useEffect } from "react";
import { Alert } from "antd";
import Message from "../components/LogIn/message";
import Login from "../components/LogIn/LogIn-component";
import SignUp from "../components/SignUp/SignUp-component";
import "../components/LogIn/Login.css";
const LoginPage = (props) => {
  const [token, setToken] = useState();
  const [response, setResponse] = useState({});
  
  if (response.status !== undefined) {
    if (response.status === 200)
      setTimeout(() => {
        props.setToken(token);
      }, 2000);
  }
  return (
    <div className="body">
      <div className="main">
        {response.status !== undefined ? (
          <Message response={response}  token={token}/>
        ) : null}
        <input type="checkbox" id="chk" name="chk" aria-hidden="true" />
        <Login setResponse={setResponse} setToken={setToken}/>
        <SignUp setResponse={setResponse} setToken={setToken} />
      </div>
    </div>
  );
};
export default LoginPage;
