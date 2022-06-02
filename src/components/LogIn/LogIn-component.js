import { useEffect, useState } from "react";
import "./Login.css";
import { Message } from "./Message";
import { Alert } from "antd";
import { useMediaQuery } from "react-responsive";

const Login = (props) => {
  const [response, setResponse] = useState({});
  const [password, setPassword] = useState(true);
  function PasswordShow() {
    password ? setPassword(false) : setPassword(true);
  }
  const chklogin = (e) => {
    e.preventDefault();
    let loginObject = {
      userInput: e.target[0].value,
      password: e.target[1].value,
    };
    sessionStorage.setItem("UserInput", e.target[0].value);
    fetch("https://localhost:44332/User/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginObject),
    }).then((response) => setResponse(response));
  };
  const chksignup = (e) => {
    e.preventDefault();
    const newUser = {
      Email: e.target[0].value,
      UserName: e.target[1].value,
      Password: e.target[2].value,
      FirstName: e.target[3].value,
      LastName: e.target[4].value,
    };
    fetch("https://localhost:44332/User/Registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((response) => setResponse(response));
  };
  //-----------------------------------------------------------------------
  return (
    <div className="main">
      <Message response={response} />
      <input type="checkbox" id="chk" name="chk" aria-hidden="true" />
      <div className="login">
            <form id="loginForm" onsubmit={chklogin}>
                <label for="chk" aria-hidden="true">Login</label>
                <input id="userNameInput" type="text" placeholder="Username" minlength="2"  maxlength="50" required/>
                <input id="passwordInput" type= {password ? "password" : "text"} name="pswd" placeholder="Password" minlength="2"  maxlength="50" required/>
                <input type="checkbox" onclick={PasswordShow}/>
                <button id="loginSubmit" type="submit">Login</button>
            </form>
        </div>
        <div className="signup">
        <form id="registration-form" onsubmit={chksignup}>
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="string" id="userEmail" placeholder="Email" minlength="1" maxlength="50" required/>
            <input type="string" id="username" placeholder="Username" step="1" min="0" required/>
            <input type="password" id="userPassword" placeholder="Password" maxlength="50" required/>
            <input type="string" id="userFirstname" placeholder="Firstname" maxlength="50" required/>
            <input type="string" id="userLastname" placeholder="Lastname" maxlength="50" required/>
            <button  type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
