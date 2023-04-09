import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../../styles/login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const username=useRef();
    const password=useRef();
    const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("token")){
          navigate("/")
            
        }
    },[])

    function login(){
        if(!username.current.value||!password.current.value){
            window.alert('Both the fields are required');
        }
        else{
            localStorage.setItem("token","userToken");
            navigate("/home")
            
        }
    }

    function hendleRegister(){
      navigate("/register")
    }

  return (
    <>
    <div
      className=""
      style={{ height: "100vh" }}
    >
       <center><h1>Login</h1></center>
       <form action="#" >
        <input
        ref={username}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="mt-4 w-50"
        />
         <input
         ref={password}
         type="password"
         className="mt-4 w-50"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button onClick={login}>
            Continue to the application
        </button>
        <br/>
        <br/>
       <p>New User Please  <Link to='./register'> Register </Link> first.</p>
        </form>
    </div>
    </>
  );
};

export default Login;

