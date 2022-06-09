import { useState } from "react";
import "../LogIn/Login.css"
const SignUp = (props) => {
  const [response, setResponse] = useState({});
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
  return (
    <div className="signup">
        <form id="registration-form" onSubmit={chksignup}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="string" id="userEmail" placeholder="Email" minLength="1" maxLength="50" required/>
            <input type="string" id="username" placeholder="Username" step="1" min="0" required/>
            <input type="password" id="userPassword" placeholder="Password" maxLength="50" required/>
            <input type="string" id="userFirstname" placeholder="Firstname" maxLength="50" required/>
            <input type="string" id="userLastname" placeholder="Lastname" maxLength="50" required/>
            <button  type="submit">Sign up</button>
        </form>
    </div>
  )
};
export default SignUp;
