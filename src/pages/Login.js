import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../components/Shared/Input"
import { Button,Checkbox  } from 'antd';
import './login.css'



const Login=()=>{
  let navigate=useNavigate();
  const[loginObject,setLoginObject]=useState({userInput:'',password:''})
  const[open,setOpen]=useState(false)

  console.log({loginObject})
  const onSubmit=()=>{
    fetch('https://localhost:44332/User/Login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginObject)
  })
  .then(response => {
    if(response.status===200){
      navigate("/home")
    }
    else if(response.status===400){
      alert('Not found!')
    }
 

  }).catch((error)=>{
    console.log(error)

  })
  }
 return <div className="main">
        <p id="message"></p>
        <p className="login">Login</p>
 
        <Input 
          id= "userInput" 
          placeholder="Username" 
          type="text" 
          value={loginObject.userInput} 
          onChange={(event)=>{
            let copyObj= Object.assign({}, loginObject)
            copyObj.userInput=event.target.value;
        
            setLoginObject(copyObj)

          }}/>
        <Input 
          id= "passInput"
          placeholder="Password"
          type="password"
          value={loginObject.password}
          onChange={(event)=>{
            let copyObj= Object.assign({}, loginObject)
            copyObj.password=event.target.value
            setLoginObject(copyObj)
          }}

         
         />
        <Checkbox/>
        <br/>
        <Button type="primary" onClick={onSubmit}>Submit</Button>
        <Button onClick={()=>setOpen(!open)}>Signup</Button>
        {/* {
          open ? <div>is open </div> : <div> is close</div>
        } */}
        
     </div> ;
 // };

}


 export default Login

