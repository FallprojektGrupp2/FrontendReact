import { useEffect, useState } from "react";
import "./Login.css";
import { Message } from "./Message"; 
import { Alert } from "antd";
import { useMediaQuery } from "react-responsive";

const Login = (props) => {
    const [password, setPassword] = useState(true);
    function PasswordShow() {
        password ? setPassword(false) : setPassword(true);       
    }

    //-----------------------------------------------------------------------
  return (
<div className="main">
    <Message/>
    <input type="checkbox" id="chk" name="chk" aria-hidden="true"/>
        <div className="login">
            <form id="loginForm">
                <label for="chk" aria-hidden="true">Login</label>
                <input id="userNameInput" type="text" placeholder="Username" minlength="2"  maxlength="50" required/>
                <input id="passwordInput" type= {password ? "password" : "text"} name="pswd" placeholder="Password" minlength="2"  maxlength="50" required/>
                <input type="checkbox" onclick={PasswordShow}/>
                <button id="loginSubmit">Login</button>
            </form>
        </div>
        <div className="signup">
    <form id="registration-form">
        <label for="chk" aria-hidden="true">Sign up</label>
        <input type="string" id="userEmail" placeholder="Email" minlength="1" maxlength="50" required/>
        <input type="string" id="username" placeholder="Username" step="1" min="0" required/>
        <input type="password" id="userPassword" placeholder="Password" maxlength="50" required/>
        <input type="string" id="userFirstname" placeholder="Firstname" maxlength="50" required/>
        <input type="string" id="userLastname" placeholder="Lastname" maxlength="50" required/>
        <button>Sign up</button>
    </form>
</div>
</div>
  );
};
export default Login;
