import { useState } from "react";
import "../LogIn/Login.css"
import { SyncOutlined} from '@ant-design/icons';

const SignUp = (props) => {
  const [password, setPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  function PasswordShow() {
    password ? setPassword(false) : setPassword(true);
  }
  const chksignup = async (e) => {
    e.preventDefault();
    const newUser = {
      Email: e.target[0].value,
      UserName: e.target[1].value,
      FirstName: e.target[2].value,
      LastName: e.target[3].value,
      Password: e.target[4].value,
    };
//-------------------------------------flytta->
    const response = await fetch("https://localhost:44332/User/Registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    //-------------------------------------
    try{
      setLoading(true)
      props.setResponse(response);
      props.setToken(await response.text());
    }
    catch{
      setLoading(false)
    }
  
  };

  return (
    <div className="signup">
        <form id="registration-form" onSubmit={chksignup}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="string" id="userEmail" placeholder="Email" minLength="1" maxLength="50" required/>
            <input type="string" id="username" placeholder="Username" step="1" min="0" required/>
            <input type="string" id="userFirstname" placeholder="Firstname" maxLength="50" required/>
            <input type="string" id="userLastname" placeholder="Lastname" maxLength="50" required/>
            <input type={password ? "password" : "text"} id="userPassword" placeholder="Password" maxLength="50" required/>
            <input type="checkbox" onClick={PasswordShow} />
            <button  type="submit">
              Sign up
              {loading &&
          <SyncOutlined style={
            { display:'inline-flex', justifyContent:'center', alignItems:'center', marginLeft:'5px' }
          } spin/>}
              </button>
        </form>
    </div>
  )
};
export default SignUp;
