import React,{useState} from "react";
import "./Login.css";
 

const Login = () => {
    
  return (
      <div className="card">
        <h2>Login</h2>
        <b>Login to manage your account</b>
       <br/>
        <p></p><input type="text" className="inpute_name" placeholder="Enter Name" />
        <input type="password" className="inpute_password" placeholder="Enter Password" />
        <p>Change Password</p>
        <button className="login_button">Login</button>
   <div className="spanContainer"> <span></span>or<span ></span></div> 
  
   Not a Memeber?<a href=""> Register now  </a>
    </div>
  );

};

export default Login;
